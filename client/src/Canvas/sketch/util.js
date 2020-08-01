import p5 from 'p5';

import { setup, draw } from './index'; 

export function instantiateSketch(parent){
  return new p5(sk => {
    sk.setup = () => setup(sk, parent);
    sk.draw = () => draw(sk);
  });
}