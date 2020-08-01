import React from 'react';

// import { Container } from './styles';

function Icon({ name, size, ...props }) {
  return <ion-icon name={name} size={size} {...props} />;
}

export default Icon;