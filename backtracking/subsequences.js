function subsequencesSlice(array, results = []) {
  if (array.length === 0) {
    console.log(results);
    return;
  }

  let item = array[0];
  let remaining = array.slice(idx + 1, array.length);

  // Left fork
  subsequencesSlice(remaining, results);

  // Right fork
  subsequencesSlice(remaining, results.concat(item));
}

subsequencesSlice(['a', 'b', 'c'], []);

function subsequencesConcat(array, idx = 0, results = []) {
  if (array.length === idx) {
    console.log(results);
    return;
  }

  let item = array[idx];

  subsequencesConcat(array, idx + 1, results.concat(item));
  subsequencesConcat(array, idx + 1, results);
}

function subsequencesPush(array, idx = 0, results = [], final = []) {
  if (array.length === idx) {
    console.log(results);
    return;
  }

  let item = array[idx];

  results.push(item);
  subsequencesPush(array, idx + 1, results, final);
  results.pop();
  subsequencesPush(array, idx + 1, results, final);
}

function subsequencesCollect(array, idx = 0, results = [], output = []) {
  if (array.length === idx) {
    output.push(results.join(''));
    return output;
  }

  let item = array[idx];

  results.push(item);
  subsequencesCollect(array, idx + 1, results, output);
  results.pop();
  subsequencesCollect(array, idx + 1, results, output);

  return output;
}

function subsequencesIter(array) {
  const n = array.length;
  const totalSubsequences = Math.pow(2, n);

  for (let i = 0; i < totalSubsequences; i++) {
    let subsequence = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subsequence.push(array[j]);
      }
    }
    console.log(subsequence.join(''));
  }
}

console.log(subsequencesCollect(['a','b','c','d']));
