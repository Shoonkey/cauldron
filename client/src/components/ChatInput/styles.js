import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;  
  width: 100%;
  
  .message-form {
    display: flex;

    .send-btn {
      padding-left: 25px;
      padding-right: 25px;
    }

    .text-input {
      background-color: #0e0e0e;
      color: #e2e2e2;

      padding: 15px;
      border-style: none;
      flex-grow: 1;
      height: 35px;

      &::placeholder {
        transition: color .4s; 
      }

      &:focus { 
        outline: none;  
        &::placeholder { 
          color: #b2b2b2; 
        }
      }

    } 
  }

  .alt-input-container {
    background: #222222;
    button { font-size: 1.5em; }
    ion-icon { vertical-align: middle; }
  }
`;
