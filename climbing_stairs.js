const cache = {};

const uniqueWays = (n, step) => {
  if (typeof cache[step] !== "undefined") {
    return cache[step];
  }

  if (n < step) {
    cache[step] = 0;
    return 0;
  }

  if (n === step) {
    cache[step] = 1;
    return 1;
  }

  const one = uniqueWays(n, step + 1);
  if (step === 0) console.log(one);
  const two = uniqueWays(n, step + 2);
  if (step === 0) console.log(two);

  cache[step] = one + two;
  return one + two;
};

const climbStairs = (n) => {
  if (n <= 0) {
    return 0;
  }

  return uniqueWays(n, 0);
};

console.log(climbStairs(3));
