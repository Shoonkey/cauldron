import React, { useState } from 'react';
import ws from 'socket.io-client';

import Icon from '../Icon';
import Button from '../Button';
import { Container } from './styles';

const socket = ws('http://localhost:8000');

socket.on('connect', () => {
  console.log("Connected");
});

socket.on('event', data => {});
socket.on('disconnect', () => {
  console.log("Disconnected");
});

function Chat() {

  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);

  return (
    <Container>
      {
        open ? (
          <div className="chat-container" onClick={() => setOpen(false)}>
            <Button className="close-btn">
              <Icon name="close-outline" />
            </Button>
            <form className="message-form">
              <input type="text" placeholder="Converse no chat!" />
              <Button type="submit">
                <Icon name="send-outline" />
              </Button>
            </form>
            {messages.map(msg => <p>{msg}</p>)};
          </div>
        ) : (
          <Button fab className="activator" onClick={() => setOpen(true)}>
            <Icon name="chatbubbles-outline" />
          </Button>
        )
      }
    </Container>
  );
}

export default Chat;