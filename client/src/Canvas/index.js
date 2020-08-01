import React, { useEffect } from 'react';

import { instantiateSketch } from './sketch/util';
import { Container } from './styles';

function Canvas() {

  useEffect(() => {
    instantiateSketch(document.getElementById("canvas-parent"));
  });

  return <Container id="canvas-parent" />;

}

export default Canvas;