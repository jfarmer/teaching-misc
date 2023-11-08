function template(array) {
  let resultSoFar = _____;

  for (let value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}

// Accumulator pattern
// Find-the-best pattern

function add(x, y) {
  return x + y;
}

// sum([]) === 0
function sum(array) {
  let resultSoFar = 0;

  for (let item of array) {
    resultSoFar = resultSoFar + item;
  }

  return resultSoFar;
}

// product([10, 10, 5]) === 10 * 10 * 5 === 500
// product([-1, 4, 200]) === -1 * 4 * 200 === -800
// produce([]) === 1

function multiply(x, y) {
  return x * y;
}

function product(array) {
  let resultSoFar = _____;

  for (let value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}

function larger(x, y) {
  if (X > y) {
    return x;
  } else {
    return y;
  }
}

function largest(array) {
  let resultSoFar = _____;

  for (let value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


function multiply(x, y) {
  return x * y;
}

function product(array) {
  let resultSoFar = _____;

  for (let value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


function appendIfEven(array, num) {
  if (num % 2 === 0) {
    return array.concat(num);
  } else {
    return array;
  }
}

function selectEvens(array) {
  let resultSoFar = [];

  for (let value of array) {
    resultSoFar = appendIfEven(results, value);
  }

  return resultSoFar;
}

function applyAndAppend(array, item, fn) {
  return array.concat(fn(item));
}

function map(array, fn) {
  let resultSoFar = [];

  for (let value of array) {
    resultSoFar = applyAndAppend(array, value, fn);
  }

  return resultSoFar;
}



// zip([10, 20, 30], [1, 2, 3]) [[10, 1], [20, 2], [30, 3]]

function accumulate(array, operator, initial) {
  let resultSoFar = initial;

  for (let item of array) {
    // console.log('resultSoFar:', resultSoFar);
    // console.log('item:', item);
    resultSoFar = operator(resultSoFar, item);
  }

  return resultSoFar;
}

// map([10, 20, 30], someFunc)
//   === [someFunc(10), someFunc(20), someFunc(30)]'


function map(array, someFunc) {
  return accumulate(
    array,
    (resultSoFar, item) => {
      resultSoFar.push(someFunc(item));
      return resultSoFar;
    },
    []
  );
}

// [...[...[...[], someFunc(4)], someFunc(19)], someFunc(76)];
// [...[...[...[], someFunc(4)], someFunc(19)], someFunc(76)];
// [...[...[someFunc(4)], someFunc(19)], someFunc(76)];
// [...[someFunc(4), someFunc(19)], someFunc(76)];
// [someFunc(4), someFunc(19)], someFunc(76)];


// let array = [4, 19, 76];
// let someFunc = function(x) { return x * 2; }


let results = map([10], x => x * 2);

// results === [20] (should be)
// results === 20
console.log('results are:', results);

function product(array) {
  return accumulate(array, multiply, 1);
}


function largest(array) {
  return accumulate(array, larger, -Infinity);
}

function sum(array) {
  // array.redice((x, y) => x + y, 0);
  return accumulate(array, (x, y) => x + y, 0);
}

// returns true if condition returns true for all
// elements of array
function all(array, condition) {
  return accumulate(
    array,
    (result, item) => result && condition(item),
    true
  );
}

function any(array, condition) {
  return accumulate(
    array,
    (result, item) => result || condition(item),
    false
  );
}

function countItem(array, itemToCount) {
  return accumulate(
    array,
    (result, item) => item === itemToCount ? result + 1 : result,
    0
  );
}

function countItems(array) {
  return accumulate(
    array,
    (results, item) => results.set(results.has(item) ? results.get(item) + 1 : 1),
    new Map()
  );
}


// array[0] * array[0] * array[1] * array[2]
// console.log('product is:', product([10, 20, 5]));

// Don't use Math.max

function larger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// function largest(array, operator, initial) {
//   let resultSoFar = initial;

//   for(let item of array){
//     resultSoFar = operator(resultSoFar, item);
//   }

//   return resultSoFar;
// }

let input = [-54, -67, -8, -19];

// console.log('max is:', largest(input));

// monoid
// x + y + z === x + y + z



//

// function and(x, y) {
//   return x && y;
// }

// add(x,0) === add(0,x) === x

// operation(x, e) === operation(e, x) === x

// // x and e are booleans (true or false)
// and(x, e) === and(e, x) === x

// and(false, true) === false
// and(true, false) === false

// and(true, true) === true

// [x, y] = [y, x]
