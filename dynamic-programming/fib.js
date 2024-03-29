function fib(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
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

function memoizeGeneric(fn) {
  let memo = new Map();

  return function(...args) {
    // We have to do something like this because JavaScript
    // determines array equality by reference rather than element-wise
    let key = JSON.stringify(args);

    if (memo.has(key)) {
      return memo.get(key);
    }

    let result = fn(...args);

    memo.set(key, result);

    return result;
  }
}

let fibTopDownAutoMemo = memoize1(fib);

function fibTopDown(n, memo = new Map()) {
  if (memo.has(n)) {
    return memo.get(n);
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let result = fib(n - 1, memo) + fib(n - 2, memo);

  memo.set(n, result);

  return result;
}

function fibBottomUp(n) {
  let fib = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fib[i] = 0;
    }

    if (i === 1) {
      fib[i] = 1;
    }

    if (i > 1) {
      fib[i] = fib[i-1] + fib[i - 2];
    }
  }

  return fib[n];
}
