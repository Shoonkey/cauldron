import styled from 'styled-components';

const fab = `
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  margin: 0 1em 1em 0;
  width: 2em;
  height: 2em;
  font-size: 1.8em;
  border-radius: 50%;
  z-index: 1;
  ion-icon { margin: auto; }
  &:focus { 
    box-shadow: 0 0 8px 2px gray; 
    outline: none; 
  }
`;

const themes = {
  primary: {
    bgColor: "#FF5757",
    hover: {
      bgColor: "#E73F3F"
    }
  }
};

export const Container = styled.button`
  cursor: pointer;
  border: none;

  background: ${props => themes[props.theme].bgColor};

  ${props => props.fab && fab}

  &:hover {
    background: ${props => themes[props.theme].hover.bgColor};
  }
`;
