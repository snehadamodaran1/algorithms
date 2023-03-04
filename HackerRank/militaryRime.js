function timeConversion(s) {
  let newStr = "",
    hour,
    newhour;
  // Write your code here

  newStr = s.substring(2, s.length - 2);
  hour = parseInt(s.substring(0, 2), 10);

  if (s.substring(s.length - 2, s.length) == "PM") {
    newhour = hour + 12;
    if (newhour == 24) {
      newhour = "12";
    }
  }
  if (s.substring(s.length - 2, s.length) == "AM") {
    newhour = hour;
    if (newhour == 12) newhour = "0";
  }

  if (newhour <= 9) newhour = "0" + newhour;
  return newhour + newStr;
}

let s = "12:59:59AM";
console.log(timeConversion(s));
