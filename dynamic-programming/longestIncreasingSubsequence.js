/**
 * Given an array of numbers, return the length of
 * the longest increasing subsequence in the array.
 */
function longestIncreasingSubsequence(array) {
}
// pretend we have a function range(i,j) that gives us the numbers i, i+1, ...., j-1;

// L(i) = the length of the longest increasing subsequence
//        with arr[i] as its last element.
//
// L(i) = 1 + max(L(0), L(1), ..., L(i-1))
//      =

// Look at all the L(j) for j < i
// list <- Select the L(j) with arr[j] < arr[i]
//  L(i) = empty(list) ? 1 : 1 + max(list)
//
// max(L(0), ...., L(n-1));

function longestIncreasingIter(array) {
  if (array.length === 0) {
    return 0;
  }

  // let overallMax = 0;

  const LIS = [0];

  for(let i = 0; i < array.length; i += 1) {
    let curMax = 0;

    for (let j = 0; j < i; j += 1) {
      if (array[j] < array[i]) {
        curMax = Math.max(curMax, LIS[j]);
      }
    }

    // overallMax = Math.max(LIS[i], overallMax);
    LIS[i] = 1 + curMax;
  }

  // return overallMax;
  return Math.max(...LIS);
}

function L(array, i, memo = []) {
  if (typeof memo[i] !== 'undefined') {
    return memo[i];
  }

  if (i === 0) return 0;
  if (i === 1) return 1;


  let curMax = 0;

  for(let j = i; j > 0; j -= 1) {
    if (array[j] < array[i]) {
      curMax = Math.max(curMax, L(array, j, memo));
    }
  }

  memo[i] = 1 + curMax;
  return memo[i];
}

function longestIncreasing(array) {
  let lis = 0;
  const memo = [0,1];

  for(let i = 1;i <= array.length; i += 1) {
    lis = Math.max(lis, L(array, i, memo));
  }

  return lis;
}
