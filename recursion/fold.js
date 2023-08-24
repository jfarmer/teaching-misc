let {isEmpty, unprepend} = require('./lists');

function foldR(list, fn, initial) {
  if (isEmpty(list)) {
    return initial;
  }

  let [first, rest] = unprepend(list);

  return fn(first, foldR(rest, fn, initial));
}

function foldL(list, fn, initial) {
  if (isEmpty(list)) {
    return initial;
  }

  let [first, rest] = unprepend(list);

  return foldL(rest, fn, fn(initial, first));
}

let accumulateLeft = foldL;
let accumulateRight = foldR;

module.exports = {
  foldL,
  foldR,
  accumulateLeft,
  accumulateRight,
};
