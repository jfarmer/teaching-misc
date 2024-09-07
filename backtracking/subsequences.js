function subsequences_slice(array, results = []) {
  if (array.length === 0) {
    console.log(results);
    return;
  }

  let item = array[0];
  let remaining = array.slice(idx + 1, array.length);

  subsequences_slice(remaining, results.concat(item));
  subsequences_slice(remaining, results);
}

function subsequences_concat(array, idx = 0, results = []) {
  if (array.length === idx) {
    console.log(results);
    return;
  }

  let item = array[idx];

  subsequences_concat(array, idx + 1, results.concat(item));
  subsequences_concat(array, idx + 1, results);
}

function subsequences_push(array, idx = 0, results = [], final = []) {
  if (array.length === idx) {
    console.log(results);
    return;
  }

  let item = array[idx];

  results.push(item);
  subsequences_push(array, idx + 1, results, final);
  results.pop();
  subsequences_push(array, idx + 1, results, final);
}

function subsequences_collect(array, idx = 0, results = [], output = []) {
  if (array.length === idx) {
    output.push(results.join(''));
    return output;
  }

  let item = array[idx];

  results.push(item);
  subsequences_collect(array, idx + 1, results, output);
  results.pop();
  subsequences_collect(array, idx + 1, results, output);

  return output;
}

console.log(subsequences_collect(['a','b','c','d']));
