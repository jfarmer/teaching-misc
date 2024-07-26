function powerSet(array) {
  if (array.length === 0)  {
    return [[]]
  }

  const last = array[array.length - 1];
  const subsets = powerSet(array.slice(0,-1));

  return subsets.concat(subsets.map(arr => arr.concat(last)))
}
