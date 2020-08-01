import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px 1em;

  .message-box {

    background: #1f1f1f;
    color: #e2e2e2;

    padding: .8em;
    border-radius: 16px;

    .header {
      display: flex;
      align-items: center;

      margin-left: .5em;
      margin-right: .5em;
      margin-bottom: 1em;

      .header-image { margin-right: 8px; width: 30%; height: auto; }

      .title { font-size: 1.4em; }
      .descriptor { color: #307685; }
    }

    .description {
      font-weight: lighter;
      text-indent: 1em;
      text-align: justify;
    }

  }

  &.own-message .author {
    justify-content: flex-end;
    .username { order: -1; }
  }

  .circle {
    background-color: #ff5757;
    width: 1em;
    height: 1em;
    border-radius: 50%;
  }

  .author {
    display: flex;
    align-items: center;
    
    margin: 4px 0;
    padding-left: 4px;

    .username { 
      margin: 0 4px;
      color: #e2e2e2;
    }
  }
`;
