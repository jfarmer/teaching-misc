function powerSet(array) {
  if (array.length === 0) {
    return [[]]
  }

  const last = array[array.length - 1];
  const subsets = powerSet(array.slice(0, -1));

  return subsets.concat(subsets.map(arr => arr.concat(last)))
}

function powerSetLeft(array, prefix = [], results = [[]]) {
  if (array.length === 0) {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    results.push(prefix.concat(array[i]))
    powerSetLeft(array.slice(i + 1), prefix.concat(array[i]), results)
  }

  return results
}
