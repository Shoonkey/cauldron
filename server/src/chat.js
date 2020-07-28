import ws from 'socket.io';

export default function setupChat(server){

  const io = ws(server);

  io.on('connection', socket => {
    
    socket.on('new message', data => {
      socket.broadcast.emit('new message', {
        username: socket.username,
        message: data
      });
    });

    socket.on('joined room', username => {
      socket.username = username;
      socket.broadcast.emit('someone joined', username);
    });

    socket.on('typing', username => {
      socket.broadcast.emit('typing', username);
    });

    socket.on('stop typing', () => {
      if (!socket.username)
        return;
      socket.broadcast.emit('stop typing', socket.username);
    });

    socket.on('disconnect', () => {
      if (!socket.username) 
        return;
      socket.broadcast.emit('someone left', socket.username);
    });

  });

}