R = require('ramda');

let rand = (high, low) => Math.random() * (high - low) + low;

// create a range from 0 to 1 and generate a random number from -1 to 1
// each element w/in random points will represent an obj w/ x and y coordinate properties
let randomPoints = R.range(0, 200).map(() => ({
  x: rand(-1, 1),
  y: rand(-1, 1)
}));
const svgns = "http://www.w3.org/2000/svg";
let container = document.getElementById('points');
randomPoints.map(coordinate => {
  let point = document.createElementNS(svgns, 'rect');
  point.setAttributeNS(null, 'x', coordinate.x);
  point.setAttributeNS(null, 'y', coordinate.y);
  point.setAttributeNS(null, 'width', 5);
  point.setAttributeNS(null, 'height', 5);
  container.appendChild(point);
};
