function fact(n) {
  let res = 1;

  for (let k = 1; k <= n; k++) {
    res *= k;
  }

  return res;
}

/**
 * Given an array, return an array containing every possible permutation
 * of the elements in the input array.
 *
 * If the input array has length N, what will the length of the returned
 * array be?
 */
function permutations(array, index = 0, results = []) {
  if (index === array.length - 1) {
    results.push([...array]);

    return results;
  }

  for (let i = index; i < array.length; i++) {
    [array[index], array[i]] = [array[i], array[index]];

    permutations(array, index + 1, results);

    [array[i], array[index]] = [array[index], array[i]];
  }

  return results;
}


let array = ['A', 'B', 'C', 'D'];
let allPermutations = permutations(array);

console.log(array);
console.log('');
console.log(allPermutations);

console.log('');
console.log('Expected # permutations: ', fact(array.length));
console.log('Actual # permutations:   ', allPermutations.length);
