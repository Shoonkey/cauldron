import React from 'react';

import { Container } from './styles';

// Note: FAB stands for "floating action button" (those floating buttons usually on the bottom
// right side of the screen)
function Button({ theme, type, fab, onClick, children, ...props }) {
  return (
    <Container 
      theme={theme} 
      fab={fab} 
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </Container>
  );
}

Button.defaultProps = {
  theme: "primary",
  type: "button",
  fab: false
}

export default Button;