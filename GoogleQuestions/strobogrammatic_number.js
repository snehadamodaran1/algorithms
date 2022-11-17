// A mirror number is a number that looks the same when rotated 180 degrees(looked at upside down).
// For example, the numbers "69", "88", and "818" are all mirror numbers.
// Write a function to determine if a number is mirror. The number is represented as a string.
function isStrobogrammatic(num) {
  let i = 0;

  while (i < num.length / 2) {
    let j = num.length - 1 - i;
    switch (num[i]) {
      case "0":
      case "1":
      case "8":
        if (num[i] !== num[j]) {
          return false;
        }
        break;
      case "6":
        if (num[j] !== "9") {
          return false;
        }
        break;
      case "9":
        if (num[j] !== "6") {
          return false;
        }
        break;
      default:
        return false;
    }
    i++;
  }
  return true;
}

nums = "8181";
console.log(isStrobogrammatic(nums));
