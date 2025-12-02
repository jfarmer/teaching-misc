function template(array) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


function add(x, y) {
  return x + y;
}


function sumList(array) {
  let resultSoFar = 0;

  for (const value of array) {
    resultSoFar = add(resultSoFar, value);
  }

  return resultSoFar;
}


function multiply(x, y) {
  return x * y;
}


function product(array) {
  let resultSoFar = 1;

  for (const value of array) {
    resultSoFar = multiply(resultSoFar, value);
  }

  return resultSoFar;
}


function largest(array) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array, return a new array with the same elements in reverse order.
 */
function reverse(array) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array and a function, return a new array where each element
 * is the result of applying the function to the corresponding element.
 *
 * map([a, b, c], fn) == [fn(a), fn(b), fn(c)]
 */
function map(array, fn) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array and a function checkFn, return a new array containing
 * only the elements of the original array for which checkFn returns true.
 */
function filter(array, checkFn) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array and a function, return true if the function returns
 * true for every element of the array and false otherwise.
 */
function every(array, checkFn) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array and a function, return true if the function returns
 * true for at least one element of the array and false otherwise.
 */
function some(array, checkFn) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array and a function, returns an object where the keys
 * are the distinct return values of the function and the values
 * are arrays of items which return that value.
 *
 * groupBy([1, 2, 3], n => n % 2) // => {0: [2], 1: [1, 3]}
 */
function groupBy(array, keyFn) {
  let resultSoFar = _____;

  // The return values of object-related methods makes following the template
  // annoying. Try to follow it in spirit, at least.
  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array of arrays, return a single array with all elements.
 *
 * flatten([[1, 2], [3], [4, 5]]) == [1, 2, 3, 4, 5]
 */
function flatten(array) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array and a function, return the number of elements
 * for which checkFn returns true.
 *
 * count([1, 2, 3, 4, 5], x => x % 2 === 0) == 2
 */
function count(array, checkFn) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array, return the last element.
 *
 * last([1, 2, 3, 4, 5]) == 5
 */
function last(array) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array and a target value, return true if the target
 * is in the array and false otherwise.
 *
 * contains([1, 2, 3], 2) == true
 * contains([1, 2, 3], 5) == false
 */
function contains(array, target) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array of strings and a separator, return a single string
 * with all elements joined by the separator.
 *
 * join(['a', 'b', 'c'], '-') == 'a-b-c'
 */
function join(array, separator) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array, return an object mapping each unique element
 * to the number of times it appears.
 *
 * frequencies(['a', 'b', 'a']) == {a: 2, b: 1}
 */
function frequencies(array) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


/**
 * Given an array, return a new array with duplicates removed,
 * preserving the order of first occurrence.
 *
 * unique([1, 2, 1, 3, 2, 4]) == [1, 2, 3, 4]
 */
function unique(array) {
  let resultSoFar = _____;

  for (const value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}


// Test your implementations
const testArray = [1, 2, 3, 4, 5];

console.log("Original array:", testArray);
console.log("Reverse:", reverse(testArray));
console.log("Map (double):", map(testArray, x => x * 2));
console.log("Filter (evens):", filter(testArray, x => x % 2 === 0));
console.log("Every (positive):", every(testArray, x => x > 0));
console.log("Some (even):", some(testArray, x => x % 2 === 0));
console.log("Group by even/odd:", groupBy(testArray, x => x % 2 === 0 ? "even" : "odd"));
console.log("Flatten:", flatten([[1, 2], [3], [4, 5]]));
console.log("Count (evens):", count(testArray, x => x % 2 === 0));
console.log("Last:", last(testArray));
console.log("Contains 3:", contains(testArray, 3));
console.log("Contains 9:", contains(testArray, 9));
console.log("Join:", join(['a', 'b', 'c'], '-'));
console.log("Frequencies:", frequencies(['a', 'b', 'a', 'c', 'b', 'a']));
console.log("Unique:", unique([1, 2, 1, 3, 2, 4]));
