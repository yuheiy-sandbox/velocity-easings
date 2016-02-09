'use strict';
import Velocity from 'velocity-animate';

let baseEasings = {};

baseEasings.Elastic = p => {
  return p === 0 || p === 1
    ? p
    : -Math.pow(2, 8 * (p - 1)) *
        Math.sin (((p - 1) * 80 - 7.5) * Math.PI / 15);
};

baseEasings.Back = p => p * p * (3 * p - 2);

baseEasings.Bounce = p => {
  let pow2;
  let bounce = 4;
  while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}

  return 1 / Math.pow(4, 3 - bounce) - 7.5625 *
    Math.pow((pow2 * 3 - 2) / 22 - p, 2);
};

Object.keys(baseEasings).forEach(name => {
  Velocity.Easings[`easeIn${name}`] = baseEasings[name];

  Velocity.Easings[`easeOut${name}`] = p => 1 - baseEasings[name](1 - p);

  Velocity.Easings[`easeInOut${name}`] = p => {
    return p < 0.5
      ? baseEasings[name](p * 2) / 2
      : 1 - baseEasings[name](p * -2 + 2) / 2;
  }
});

export default Velocity;
