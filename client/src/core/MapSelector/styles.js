import styled from 'styled-components';

export const Container = styled.nav`

  position: relative;
  background: #2D2D2D;
  z-index: 1;

  width: 80%;
  margin: 0 auto;

  transform: translateY(-100%);
  transition: transform .4s;

  &.open {
    transform: translateY(0);
    .toggle-btn {
      transform: rotate(180deg) translateY(-50%);
    }
  }

  .loading-text { color: #e2e2e2; }

  .toggle-btn {

    position: absolute;
    bottom: 0;
    right: 15%;

    transform: translateY(calc(100% + .5em));
    transition: transform .4s;

    width: 2em;
    height: 2em;

    background: #1b1b1b;
    color: #efae13;
    outline: none;

    border: solid 1px #efae13;
    border-radius: 50%;

    &:hover {
      border-color: #ff5757;
      color: #ff5757;
    }

    ion-icon { vertical-align: middle; }

  }

  .map-container {

    text-align: center;
    padding: 1.2em;
    overflow-x: auto;

    .add-map-btn { 
      display: flex;
      margin: 0 auto;
      font-family: Saira;
      font-weight: bolder;
      align-items: center;
      padding: .5em .5em; 
    }

    .map {
      background: #ff5757;
      min-width: 5em;
      min-height: 6em;  

      margin: .8em;

      &:hover {
        background: #E73F3F;
      }
    }
  }

`;
