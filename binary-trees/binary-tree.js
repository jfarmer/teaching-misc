const util = require('node:util');

const EMPTY_TREE = null;

class TreeNode {
  constructor(value, left = EMPTY_TREE, right = EMPTY_TREE) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  toString() {
    // Use an external function so we can display empty lists as "()"
    // rather than "null"
    return treeToString(this);
  }

  // Changes how instances are displayed in the Node console/repl
  // This is like Python's __repr__ magic method and is Node-specific
  [util.inspect.custom]() {
    return this.toString();
  }
}

function maxDepth(tree) {
  if (isEmpty(tree) || isLeaf(tree)) {
    return 0;
  }

  let [_, left, right] = destruct(tree);

  return 1 + Math.max(maxDepth(left), maxDepth(right));
}

function treeSum(tree) {
  if (isEmpty(tree)) {
    return 0;
  }

  let [value, left, right] = destruct(tree);

  return value + treeSum(left) + treeSum(right);
}

function filter(tree, predicate) {
  if (isEmpty(tree)) {
    return EMPTY_TREE;
  }

  let [value, left, right] = destruct(tree);

  let filteredLeft = filter(left, predicate);
  let filteredRight = filter(right, predicate);

  if (predicate(value)) {
    return new TreeNode(value, filteredLeft, filteredRight);
  } else {
    return mergeTrees(filteredLeft, filteredRight);
  }
}

function invertTree(tree) {
  if (isEmpty(tree)) {
    return EMPTY_TREE;
  }

  let [value, left, right] = destruct(tree);

  let invertedLeft = invertTree(right);
  let invertedRight = invertTree(left);

  return new TreeNode(value, invertedLeft, invertedRight);
}

function mergeTrees(leftTree, rightTree) {
  if (isEmpty(leftTree)) {
    return rightTree;
  }

  if (isEmpty(rightTree)) {
    return leftTree;
  }

  let [leftValue, leftLeft, leftRight] = destruct(leftTree);
  let [rightValue, rightLeft, rightRight] = destruct(rightTree);

  let mergedLeft = mergeTrees(leftLeft, rightLeft);
  let mergedRight = mergeTrees(leftRight, rightRight);

  return new TreeNode(leftValue + rightValue, mergedLeft, mergedRight);
}

function isEmpty(tree) {
  return tree === EMPTY_TREE;
}

function isLeaf(tree) {
  return isEmpty(tree.left) && isEmpty(tree.right);
}

function destruct(tree) {
  return [tree.value, tree.left, tree.right];
}

function treeToString(tree, pointer = '', padding = '') {
  if (isEmpty(tree)) {
    return '';
  }

  let [value, left, right] = destruct(tree);

  let result = ` ${padding}${pointer}${value}\n`;
  let rightPointer = " └── ";
  let leftPointer = isEmpty(right) ? rightPointer : " ├── ";

  result += subtreeToString(left, leftPointer, padding, !isEmpty(right));
  result += subtreeToString(right, rightPointer, padding, false);

  return result;
}


function subtreeToString(tree, pointer = '', padding = '', hasRightSibling = false) {
  if (isEmpty(tree)) {
      return '';
  }

  let [value, left, right] = destruct(tree);

  let result = `${padding}${pointer}${value}\n`;
  let rightPointer = " └── ";
  let leftPointer = isEmpty(right) ? rightPointer : " ├── ";

  let newPadding = hasRightSibling ? " │  " : "    ";

  result += subtreeToString(left, leftPointer, padding + newPadding, !isEmpty(right));
  result += subtreeToString(right, rightPointer, padding + newPadding, false);

  return result;
}

module.exports = {
  TreeNode,
  treeToString,
  maxDepth,
  treeSum,
  filter,
  invertTree,
  mergeTrees,
};
