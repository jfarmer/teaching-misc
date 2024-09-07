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
function permutationsSwap(array, index = 0, results = []) {
  if (index === array.length) {
    results.push([...array]);

    return results;
  }

  // The "trick" here is that because we build permutations prefix-first, i.e.,
  // from left to right, we can use part of the original array to store
  // the permutation we've generated so far, and everything to the right of that
  // to store the remaining elements. We swap elements between the two parts,
  // which is a constant-time operation.
  for (let i = index; i < array.length; i++) {
    [array[index], array[i]] = [array[i], array[index]];

    permutations(array, index + 1, results);

    [array[i], array[index]] = [array[index], array[i]];
  }

  return results;
}


function permutations(array) {
  // If we call permutations(foo), we expect it to return an array
  // that contains foo (and potentially other arrays). That means
  // permutations([]) should return [[]] and not just []
  if (array.length === 0) {
    return [[]];
  }

  const results = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const remainingItems = array.slice(0, i).concat(array.slice(i + 1));

    const remainingPerms = permutations(remainingItems);

    for (let perm of remainingPerms) {
      results.push([item, ...perm]);
    }
  }

  return results;
}

function permutationsBad(array, results = []) {
  if (array.length === 0) {
    console.log(results);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let remainingItems = array.slice(0, i).concat(array.slice(i + 1));

    permutationsBad(remainingItems, results.concat([item]));
  }
}

// Test

let array = Array.from('ABCD');
let allPermutations = permutations(array);

console.log(array);
console.log('');
console.log(allPermutations);

console.log('');
console.log('Expected # permutations: ', fact(array.length));
console.log('Actual # permutations:   ', allPermutations.length);
