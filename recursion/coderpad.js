function add(x, y) {
  return x + y;
}

/**
 * Given a list of numbers, return their sum.
 */
function sum(list) {
  // List<Int> := EmptyList
  if (isEmpty(list)) {
    return 0;
  }

  // List<Int> := prepend(Int, List<Int>)
  let [first, rest] = unprepend(list);

  return add(first, sum(rest));
}

function template(list) {
  if (_____) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}


/**
 * Given a list of numbers, return their product, i.e.,
 * multiply them together.
 */
function product(list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Given a list of numbers, returns the largest number in the list.
 */
function largest(list) {
  if (_____) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Returns a reversed copy of the given list, i.g.,
 *
 *   reverse(10 -> 20 -> 30) == 30 -> 20 -> 10
 */
function reverse(list) {
  if (_____) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

/**
 * Return a new list that looks like the old list w/ the
 * given value appended to the end.
 */
function append(value, list) {
  if (isEmpty(list)) {
    return _____;
  }

  let [first, rest] = unprepend(list);

  return _____;
}

// Binary Operations Identities
//
// A function that takes two values of the same type and returns
// a third value of that same type is called a "binary operation."
//
// For example, the basic arithmetical operations (addition, multiplication,
// subtraction, etc.) are all binary operations on numbers.
// Array concatenation is a binary operation on arrays.
// Logical AND (`&&`) and OR (`||`) are binary operations on booleans.
// Set intersection and union are binary operations on sets.
//
// Given a binary operation on a specific type, there's often a special value
// that acts as a "do-nothing" value when fed into the operation. For example,
// adding 0 to any number gives you back the original number.
//
// Such a special value is called the "identity of the operation"
//
// Examples:
//
// x == add(x, 0)                 // 0 is the identity of addition
// x == multiply(x, 1)            // 1 is the identity of multiplication
// x == largest(x, -Infinity)     // -Infinity is the identity of larger
//
// array == concat(array, [])     // [] is the identity of array concatenation
//
// set == union(set, EMPTY_SET)   // The empty set is the identity of set union
//
// Not every binary operation has an identity.

// Associativity
// If `oper` is a binary operation then we say it's "associative" if it has the following property:
//
//   oper(x, oper(y, z)) == oper(oper(x, y), z)  for all x,y,z
//
// Replace `oper` with addition to see what this is saying:
//
//   add(x, add(y, z)) == add(add(x, y), z)
//         x + (y + z) == (x + y) + z
//
// In other words, "parentheses don't matter", i.e., we get the same result no matter which order we
// apply the operation.
//
// Not all binary operations are associative. Subtraction isn't associative, for example.

// Left vs right fold
//
// foldLeft([10, 20, 30], add, 0)  == add(add(add(0, 10), 20), 30)
//                                 == (((0 + 10) + 20) + 30)
//
// foldRight([10, 20, 30], add, 0) == add(10, add(20, add(30, 0)))
//                                 == (10 + (20 + (30 + 0)))
//
// foldLeft and foldRight differ in how they group operations w/ parantheses, i.e.,
// which pairwise operations are performed first.
// foldLeft performs operation starting from left-most elements
// foldRight performs operation starting from right-most elements
//
// If fn is associative then foldLeft and foldRight will return the same result
// Otherwise, one is often more efficient than the other depending on what structure
// you're folding over.
//
// Linked lists like "prepend" and foldRight is prepend-friendly
// Arrays like "append" and foldLeft is append-friendly
//
// If you're passing a binary operation to fold then the initial value should be
// the identity of that operation, if it exists. If it doesn't exist then you
// probably want to disallow empty lists as input.

// let list = Node.fromArray([10, 21, 30, -17, 40, -109]);
// let list2 = Node.fromArray(['one', 'two']);

// console.log('list:    ', list);
// console.log('sum:     ', sum(list));
// console.log('max:     ', max(list));
// console.log('odds:    ', filter(list, x => x % 2 !== 0));
// console.log('double:  ', map(list, x => x * 2));
// console.log('everyNeg:', every(list, x => x < 0));
// console.log('someNeg: ', some(list, x => x < 0));
// console.log('maxByAbs:', maxBy(list, x => Math.abs(x)));
// console.log('reverse: ', reverse(list));
// console.log('revBad:  ', reverseBad(list));
// console.log('reverseA:', reverseA(list));
// console.log('append:  ', append(list, 200));
// console.log('zip:     ', zip(list, list2));
// console.log('groupBy: ', groupBy(list, x => x % 2 === 0));
