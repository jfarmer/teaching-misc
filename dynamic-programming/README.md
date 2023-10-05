# Dynamic Programming

## Agenda

1. Introductions (brief!)
2. Calibration
3. Exercises

See: <https://github.com/jfarmer/exercises-js-dynamic-programming>

## Calibration

## Exercises

### Counting Stairs

Imagine a staircase with N stairs. If it's easier, imagine a specific number like N=100 or N=10.

Your legs are long enough that you can climb the stairs by going up one step or by skipping a step and going up two steps.

How many ways are there to get to the top of the stairs?

### Longest Increasing Subsequence

Let `[a0, a1, a2, ..., aN]` be an array. A *subsequence* of an array is a subarray that preserved relative order, but not necessarily contiguity. A subsequence is called increasing the elements are sorted in ascending order.

Given an array, find the longest increasing subsequence. If there's more than one, you can return any one.

For example:

```js
let array = [8, 3, 4, 12, 2, 10, 6, 9];
```

The longest increasing subsequence is `[3, 4, 6, 9]`.
