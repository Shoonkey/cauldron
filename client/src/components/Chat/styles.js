import styled from 'styled-components';

export const Container = styled.div`
  .chat-container {
    position: fixed;

    bottom: 0;
    right: 0;
    
    width: 300px;
    height: 80vh;
    margin-right: 1em;
    
    background: #ddd;
    border-radius: 1em 1em 0 0;

    .close-btn { 
      position: absolute;
      top: 4px;
      right: 0;
      background: transparent;
      font-size: 2em; 

      ion-icon {
        transition: transform .4s;
        transform-origin: center center;
      }
      
      &:hover ion-icon {
        transform: rotate(90deg);
      }
    }

    .message-form {
      display: flex;
      position: absolute;
      bottom: 0;  
    }
  }
`;
