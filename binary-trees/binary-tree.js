const util = require('node:util');

const EMPTY_TREE = null;

class TreeNode {
  static fromArray(array) {
    if (array === undefined || array === null || array.length === 0) {
      return EMPTY_TREE;
    }

    let [value, left, right] = array;

    return new TreeNode(value, TreeNode.fromArray(left), TreeNode.fromArray(right));
  }

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
  let rightPointer = ' └── ';
  let leftPointer = isEmpty(right) ? rightPointer : ' ├── ';

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
  let rightPointer = ' └── ';
  let leftPointer = isEmpty(right) ? rightPointer : ' ├── ';

  let newPadding = hasRightSibling ? ' │  ' : '    ';

  result += subtreeToString(left, leftPointer, padding + newPadding, !isEmpty(right));
  result += subtreeToString(right, rightPointer, padding + newPadding, false);

  return result;
}

function doNothing() { return; };

function treeDFS(tree, callback = doNothing) {
  if (isEmpty(tree)) {
    return;
  }

  callback(tree);
  treeDFS(tree.left, callback);
  treeDFS(tree.right, callback);
}

function treeDFSInOrder(tree, callback = doNothing) {
  if (isEmpty(tree)) {
    return;
  }

  treeDFSInOrder(tree.left, callback);
  callback(tree);
  treeDFSInOrder(tree.right, callback);
}


function foldTreeR(tree, fn, init) {
  if (tree === null) {
    return init;
  }

  let {value, left, right} = tree;

  return fn(value, foldTreeR(right, fn, foldTreeR(left, fn, init)));
}

function foldTreeL(tree, fn, init) {
  if (tree === null) {
    return init;
  }

  let { value, left, right } = tree;

  return foldTreeL(right, fn, foldTreeL(left, fn, fn(init, value)));
}

function treeBFS(tree, callback = doNothing) {
  let queue = [tree];

  while (queue.length > 0) {
    let current = queue.shift();

    if (isEmpty(current)) {
      continue;
    }

    callback(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function treeTemplate(tree) {
  if (isEmpty(tree)) {
    return _____;
  }

  let [value, left, right] = destruct(tree);

  return _____;
}

function maxDepth(tree) {
  if (isEmpty(tree)) {
    return -1;
  }

  let [value, left, right] = destruct(tree);

  return 1 + Math.max(maxDepth(left), maxDepth(right));
}

function treeSum(tree) {
  if (isEmpty(tree)) {
    return 0;
  }

  let [value, left, right] = destruct(tree);

  return value + treeSum(left) + treeSum(right);
}

function treeFilter(tree, predicate) {
  if (isEmpty(tree)) {
    return EMPTY_TREE;
  }

  let [value, left, right] = destruct(tree);

  let filteredLeft = treeFilter(left, predicate);
  let filteredRight = treeFilter(right, predicate);

  if (predicate(value)) {
    return new TreeNode(value, filteredLeft, filteredRight);
  } else {
    return treeMerge(filteredLeft, filteredRight);
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

function treeMerge(leftTree, rightTree) {
  if (isEmpty(leftTree)) {
    return rightTree;
  }

  if (isEmpty(rightTree)) {
    return leftTree;
  }

  let [leftValue, leftLeft, leftRight] = destruct(leftTree);
  let [rightValue, rightLeft, rightRight] = destruct(rightTree);

  let mergedLeft = treeMerge(leftLeft, rightLeft);
  let mergedRight = treeMerge(leftRight, rightRight);

  return new TreeNode(leftValue + rightValue, mergedLeft, mergedRight);
}

if (require.main === module) {
  let exampleTree = TreeNode.fromArray(
    [100,
      [50,
        [-100,
          [-250],
          [30]
        ],
        [75]
      ],
      [150,
        [125],
        [250]
      ],
    ]
  );

  console.log('Tree:');
  console.log(exampleTree);

  console.log('In-order DFS:');
  treeDFSInOrder(exampleTree, node => console.log(node.value));

  console.log('sum:', foldTreeR(exampleTree, (x, y) => x + y, 0));
}

module.exports = {
  TreeNode,
  treeToString,
  maxDepth,
  treeSum,
  treeFilter,
  invertTree,
  treeMerge,
};
