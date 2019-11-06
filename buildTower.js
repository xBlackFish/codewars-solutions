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
    let gapLength = nFloors - 1;
    let substructureLength = 2 * gapLength + 1;
    const tower = [];
    const brick = '*';

    for(let i=gapLength; i>=0; i--) {
        let levelPadStart = brick.padStart(gapLength);
        let levelPadEnd = brick.padEnd(gapLength);
        brick = brick + '*'
        tower.push(levelPadEnd);
    }

    return tower;
}