'use strict';
import Velocity from './velocity';

console.log(Object.keys(Velocity.Easings));

Velocity(document.querySelector('#box'), {
  translateY: 400,
  scale: 2
}, {
  duration: 800,
  easing: 'easeOutBounce'
});
