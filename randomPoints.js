R = require('ramda');

let rand = (high, low) => Math.random() * (high - low) + low;

// create a range from 0 to 1 and generate a random number from -1 to 1
let randomPoints = R.range(0, 100).map(() => rand(-1, 1));
