function groupIntoMap(key, map, value) {
  if (!map.has(key)) {
    map.set(key, []);
  }

  return map.set(key, map.get(key).concat(value));
}

function groupBy(list, fn) {
  if (isEmpty(list)) {
    return new Map();
  }

  let [first, rest] = unprepend(list);

  // This is noisy but only because JavaScript's Map
  // doesn't support default values. We could write an
  // operation like "groupIntoMap" above to encapsulate this.
  let key = fn(first);
  let restGroup = groupBy(rest, fn);

  if (!restGroup.has(key)) {
    restGroup.set(key, []);
  }

  return restGroup.set(key, restGroup.get(key).concat(first))

  // return groupIntoMap(fn(first), groupBy(rest, fn), first);
}

module.exports = {
  groupIntoMap,
  groupBy,
}
