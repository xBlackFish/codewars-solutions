/* 

Build Tower by the following given argument:
number of floors (integer and always greater than 0). for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

*/

const towerBuilder = nFloors => {
  const buildFloor = (bricks, spaceLength) =>
    `${" ".repeat(spaceLength)}${"*".repeat(bricks)}${" ".repeat(spaceLength)}`;

  let bricks = 2 * nFloors - 1;
  let space = 0;
  const tower = [];

  while (bricks >= 1) {
    tower.unshift(buildFloor(bricks, space));
    bricks -= 2;
    space++;
  }

  return tower;
};
