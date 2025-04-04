// let example = [10, 20, 30, -1];
//
// console.log('array: ', example);
// console.log('sum:   ', sum(example));
// console.log('product: ', product(example));
// console.log('largest: ', largest(example));
// console.log('evens:   ', selectEvens(example));


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

  for (let value of array) {
    resultSoFar = resultSoFar + value;
  }

  return resultSoFar;
}

// product([10, 10, 5]) === 10 * 10 * 5 === 500
// product([-1, 4, 200]) === -1 * 4 * 200 === -800
// product([]) === 1

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
  if (x > y) {
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

function accumulate(array, operation, initial) {
  let resultSoFar = initial;

  for (let item of array) {
    // console.log('resultSoFar:', resultSoFar);
    // console.log('item:', item);
    resultSoFar = operation(resultSoFar, item);
  }

  return resultSoFar;
}

// map([10, 20, 30], someFunc)
//   === [someFunc(10), someFunc(20), someFunc(30)]'


function mapAcc(array, someFunc) {
  return accumulate(
    array,
    (resultSoFar, item) => resultSoFar.concat(someFunc(item)),
    []
  );
}

function productAcc(array) {
  return accumulate(array, multiply, 1);
}


function largestAcc(array) {
  return accumulate(array, larger, -Infinity);
}

function sumAcc(array) {
  // array.reduce((x, y) => x + y, 0);
  return accumulate(array, (x, y) => x + y, 0);
}

// returns true if condition returns true for all
// elements of array
function everyAcc(array, condition) {
  return accumulate(
    array,
    (result, item) => result && condition(item),
    true
  );
}

function anyAcc(array, condition) {
  return accumulate(
    array,
    (result, item) => result || condition(item),
    false
  );
}

function countItemAcc(array, itemToCount) {
  return accumulate(
    array,
    (result, item) => item === itemToCount ? result + 1 : result,
    0
  );
}

function countItemsAcc(array) {
  return accumulate(
    array,
    (results, item) => results.set(results.has(item) ? results.get(item) + 1 : 1),
    new Map()
  );
}
