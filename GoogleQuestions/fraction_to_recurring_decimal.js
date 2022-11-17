// Make use of a Hash Table to find the repetitive point
// Calculate the decimal part like normal in school
// My solution:
var fractionToDecimal = function (numerator, denominator) {
  let res = "";
  if (numerator === 0) return "0";

  let negative = (numerator <= 0) ^ (denominator <= 0);

  let nume = Math.abs(numerator);
  let deno = Math.abs(denominator);

  if (negative) res += "-";
  res += Math.floor(nume / deno);
  let remainder = nume % deno;
  if (remainder === 0) return res;

  let decimal = "";
  let repeat = false;
  let map = new Map();
  while (remainder !== 0) {
    map.set(remainder, decimal.length);
    remainder *= 10;
    const temp = Math.floor(remainder / deno);
    decimal += temp;
    remainder %= deno;
    if (map.has(remainder)) {
      repeat = true;
      break;
    }
  }
  if (repeat) {
    index = map.get(remainder);
    decimal =
      decimal.substring(0, index) + "(" + decimal.substring(index) + ")";
  }
  res += "." + decimal;
  return res;
};

var numerator = 4,
  denominator = 333;
console.log(fractionToDecimal(numerator, denominator));
