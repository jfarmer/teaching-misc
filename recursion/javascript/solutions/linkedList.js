/**
 * Shared linked list infrastructure for solutions.
 */

const util = require('node:util');

const EMPTY_LIST = null;

class Node {
  static fromArray(array) {
    if (array.length === 0) {
      return EMPTY_LIST;
    }
    let [first, ...rest] = array;
    return prepend(first, Node.fromArray(rest));
  }

  constructor(value, next = EMPTY_LIST) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return listToString(this);
  }

  [util.inspect.custom]() {
    return this.toString();
  }
}

function listToString(list) {
  if (isEmpty(list)) {
    return '()';
  }
  let [first, rest] = unprepend(list);
  return `${first} -> ${listToString(rest)}`;
}

function isEmpty(list) {
  return list === EMPTY_LIST;
}

function prepend(val, list) {
  return new Node(val, list);
}

function unprepend(list) {
  return [list.value, list.next];
}

function toArray(list) {
  if (isEmpty(list)) {
    return [];
  }
  let [first, rest] = unprepend(list);
  return [first, ...toArray(rest)];
}

module.exports = {
  EMPTY_LIST,
  Node,
  listToString,
  isEmpty,
  prepend,
  unprepend,
  toArray,
};
