// Problem: Design an algorithm to encode a list of strings to a string.
//  The encoded string is then sent over the network and is decoded back to the original list of strings.
//  Please implement encode and decode

// Example(s):

// Example1
// Input: [“lint”,“code”,“love”,“you”] Output: [“lint”,“code”,“love”,“you”]
// Explanation: One possible encode method is: “lint: ; code: ; love: ; you”

// Example2

// Input: [“we”, “say”, “:”, “yes”] Output: [“we”, “say”, “:”, “yes”]
// Explanation: One possible encode method is: “we: ; say: ;::: ; yes”

var encode = function (strs) {
  var s = "";
  for (let str of strs) {
    s = s + str.length + "#" + str;
  }
  return s;
};

var decode = function (str) {
  var decode = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str.charCodeAt(i) >= 48 &&
      str.charCodeAt(i) <= 57 &&
      str.charAt(i + 1) === "#"
    ) {
      let wordSize = str.charCodeAt(i) - 48;
      decode.push(str.substring(i + 2, i + 2 + wordSize));
    }
  }
  return decode;
};

var strs = ["i", "love", "to", "code"];
var encoded_string = encode(strs);
console.log("Encoded string = ", encoded_string);

var decoded_string = decode(encoded_string);
console.log("Decoded string = ", decoded_string);
