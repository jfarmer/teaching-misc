function subsequences_concat(array, idx = 0, results = []) {
  if (array.length === idx) {
    console.log(results);
    return;
  }

  subsequences_concat(array, idx + 1, results.concat(array[idx]));
  subsequences_concat(array, idx + 1, results);
}

function subsequences_push(array, idx = 0, results = [], final = []) {
  if (array.length === idx) {
    console.log(results);
    return;
  }

  results.push(array[idx]);
  subsequences_push(array, idx + 1, results, final);
  results.pop();
  subsequences_push(array, idx + 1, results, final);
}

function subsequences_collect(array, idx = 0, results = [], output = []) {
  if (array.length === idx) {
    output.push(results.join(''));
    return output;
  }

  results.push(array[idx]);
  subsequences_collect(array, idx + 1, results, output);
  results.pop();
  subsequences_collect(array, idx + 1, results, output);

  return output;
}

console.log(subsequences_collect(['a','b','c','d']));
