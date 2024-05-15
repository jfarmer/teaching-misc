const util = require('node:util');

const EMPTY_LIST = null;

class Node {
  /**
   * Helper function to construct a linked list from an array of values
   */
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
    // Use an external function so we can display empty lists as "()"
    // rather than "null"
    return listToString(this);
  }

  // Changes how instances are displayed in the Node console/repl
  // This is like Python's __repr__ magic method and is Node-specific
  [util.inspect.custom]() {
    return this.toString();
  }

  *[Symbol.iterator]() {
    yield this.value;

    if (!isEmpty(this.next)) {
      yield* this.next;
    }
  }
}

/**
 * Helper function to pretty-print linked lists. Defined outside
 * the Node class so that we can use `null` to represent the empty list.
 */
function listToString(list) {
  if (isEmpty(list)) {
    return '()';
  }

  let [first, rest] = unprepend(list);

  return `${first} -> ${listToString(rest)}`;
}

/**
 * Returns true if list is empty and false otherwise
 */
function isEmpty(list) {
  return list === EMPTY_LIST;
}

/**
 * Returns true if rest of list is empty and false otherwise
 * That is, returns true if list has only one element
 */
function isRestEmpty(list) {
  return isEmpty(list) || isEmpty(list.next);
}

/**
 * Construct a new list by prepending a value to another list
 */
function prepend(val, list) {
  if (isEmpty(list)) {
    return new Node(val);
  }

  return new Node(val, list);
}

/**
 * Returns a pair consisting of the first element of the list and the rest of the list
 */
function unprepend(list) {
  return [list.value, list.next];
}

module.exports = {
  Node,
  prepend,
  unprepend,
  EMPTY_LIST,
  listToString,
  isEmpty,
  isRestEmpty,
};
