/* Given an array, find the int that appears an odd number of times.
 There will always be only one integer that appears an odd number of times. */

 const findOdd = (array) => {
  
    const numbersAccumulator = array.reduce((acc, curr) => {
        acc[curr] ? acc[curr] = acc[curr] + 1 : acc[curr] = 1;
        return acc;
    }, {})

    const oddTimesNumber = Object.values(numbersAccumulator).find(v => v % 2 !==0)

    return Number(Object.keys(numbersAccumulator).filter(k => numbersAccumulator[k] === oddTimesNumber)[0])
    
  }