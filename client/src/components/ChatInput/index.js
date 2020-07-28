import React, { useState } from 'react';

import Icon from '../Icon';
import Button from '../Button';
import { Container } from './styles';

function ChatInput({ onMessage }) {

  const [message, setMessage] = useState("");

  function submitFn(e){
    e.preventDefault();

    if (message.length === 0)
      return;
    
    onMessage(message);
    setMessage("");
  }

  return (
    <Container>
      <form className="message-form" onSubmit={submitFn}>
        <input 
          className="text-input"
          type="text" 
          placeholder="Converse no chat!" 
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button className="send-btn" type="submit">
          <Icon name="send-outline" />
        </Button>
      </form>
    </Container>
  );
}

export default ChatInput;