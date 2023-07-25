function fib(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 1);
}

/**
 * Given a function `fn` that accepts a single argument,
 * returns a new function which caches/memoizes calls to the function.
 */
function memoize1(fn) {
  let memo = new Map();

  return function(x) {
    if (memo.has(x)) {
      return memo.get(x);
    }

    let result = fn(x);
    memo.set(x, result);

    return result;
  }
}

let fibTopDown = memoize1(fib);

// function fibTopDown(n, memo = new Map()) {
//   if (memo.has(n)) {
//     return memo.get(n);
//   }

//   if (n === 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   let result = fib(n - 1, memo) + fib(n - 2, memo);

//   memo.set(n, result);

//   return result;
// }

function fibBottomUp(n) {
  let fib = [];

  fib[0] = 0;
  fib[1] = 1;

  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i - 2];
  }

  return fib[n];
}
