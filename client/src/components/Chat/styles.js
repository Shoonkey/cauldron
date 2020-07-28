import styled from 'styled-components';

export const Container = styled.div`

  font-family: Roboto;

  .chat-container {
    position: fixed;

    bottom: 0;
    right: 0;
    
    width: 300px;
    height: 80vh;

    margin-right: 1em;
    padding: 2em 0 4em 0;

    transform: translateY(100%);
    transition: transform .4s;
    
    background: #2B2B2B;
    border-radius: 1em 1em 0 0;

    &.open {
      transform: translateY(0);
    }

    .close-btn { 
      color: #e2e2e2;
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

    .message-container {
      overflow-y: auto;
      max-height: 100%;
    }

  }
`;
