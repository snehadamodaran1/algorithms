// Permutation and combination...

// Fill n space with unique digits.

// if n>1 number cannot start with 0.

// if n=3 possible ways to fill are _ _ _ ~~ 9 * 9 * 8

// First place cannot be filled with 0 so 9 ways.

// Second can be filled in 9 ways as 0 can be placed.

// Third place can be filled in 8 ways.

// So total will be sum ( 3 digits+2digits+1digit ).

// Add 1 if we for 0 in single digit numbers.

var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  }

  let ans = 10;
  let ways = 9;

  for (let i = 1; i < n; i++) {
    // ways to fill i spaces with unique numbers.
    ways *= 10 - i;
    ans += ways;
  }
  console.log(ans);
  return ans;
};
countNumbersWithUniqueDigits(3);
