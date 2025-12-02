# Arrays

## Agenda <!-- omit in toc -->

1. Introductions (brief!)
2. Calibration
3. Arrays and Random Access
4. Coding

## Contents

- [Contents](#contents)
- [Why Do Arrays Have O(1) Random Access?](#why-do-arrays-have-o1-random-access)
- [Exercises](#exercises)
- [Patterns](#patterns)
- [Algebra](#algebra)

## Why Do Arrays Have O(1) Random Access?

Recall that "random access" means accessing the value in an array at a particular index.

Unlike most data structures, there's nothing about the *shape* of an array that tells us why we get O(1) random access. Array random access is fast because we built hardware to make it fast.

For example, the EDVAC used delay-line memory, which does *not* have constant-time random access. Still, in his paper describing EDVAC, John von Neumann gave a program that implemented merge sort.

See: <https://web.mit.edu/STS.035/www/PDFs/edvac.pdf>

The "Manchester Baby" is the first computer to support random access memory. It was designed as a prototype / proof-of-concept to illustrate the idea in 1948.

See: <https://en.wikipedia.org/wiki/Manchester_Baby>

## Exercises

Fill in the blanks to implement each function using the accumulator pattern:

- [accumulate_exercises.py](accumulate_exercises.py)
- [accumulate_exercises.js](accumulate_exercises.js)

## Patterns

We'll talk about the "accumulator" and "find-the-best" patterns, but what I want to emphasize is that they're really the *same* pattern.

This is the general template:

```js
function template(array) {
  let resultSoFar = _____;

  for (let value of array) {
    resultSoFar = _____;
  }

  return resultSoFar;
}
```

```python
def template(array):
  result_so_far = _____

  for value in array:
    result_so_far = _____

  return result_so_far
```

## Algebra

See: <https://github.com/jfarmer/algebra-via-cs>

The general pattern looks like this:

```js
function accumulate(array, operation, initialValue) {
  let resultSoFar = initialValue;

  for (let value of array) {
    resultSoFar = operation(resultSoFar, value);
  }

  return resultSoFar;
}
```

For example:

```js
function sumAcc(array) {
  return accumulate(array, (x, y) => x + y, 0);
}

function productAcc(array) {
  return accumulate(array, (x, y) => x * y, 1);
}

function largestAcc(array) {
  return accumulate(array, (x, y) => x > y ? x : y, -Infinity);
}

// e.g., select(array, val => val % 2 === 0)
function select(array, checkFn) {
  return accumulate(
    array,
    (results, item) => {
      if (checkFn(item)) {
        results.push(item)
      }

      return results;
    },
    []
  );
}
```
