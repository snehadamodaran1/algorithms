/*
STEP:make updated num is smallest possible after remove k.think monotonic stack
1S.create stack, keep that stack monotonic increasing(bottom->top)
2S.WHILE k>0 and stack.len>0 and cur < stack.peek(): stack.pop. anytime push(cur)
3S.handle adge cases: trailing 0s, and size must be n-k, so resize res
*/
var removeKdigits = function (num, k) {
  let stack = [];
  let k1 = k;
  for (let n of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > n) {
      // if a new number is going to be added in a stack which is smaller than previously added numbers then pop till u find smaller number
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  let res = "";
  stack = stack.join("");
  console.log(stack);
  // stack = stack.slice(0, num.length - k1); // converting back to string
  let checkNum = false;
  for (let n of stack) {
    if (n == "0") {
      // remove 0s in front
      if (checkNum) {
        res += n;
      }
    } else {
      res += n;
      checkNum = true;
    }
  }

  return res.slice(0, num.length - k1).length == 0
    ? "0"
    : res.slice(0, num.length - k1);
};

var num = "1432219";
console.log(removeKdigits(num, 3));
