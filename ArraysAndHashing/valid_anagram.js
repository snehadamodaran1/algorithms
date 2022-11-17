// not optimized - make 2 hash maps of both the strings, then compare the hash map data ( 3n )
var valid_anagram = function (s, t) {
  var hash1 = {};
  var hash2 = {};
  if (s.length !== t.length) return false;
  for (var i = 0; i < s.length; i++) {
    if (hash1[s[i]]) {
      hash1[s[i]]++;
    } else {
      hash1[s[i]] = 1;
    }
  }
  for (var j = 0; j < t.length; j++) {
    if (hash2[t[j]]) {
      hash2[t[j]]++;
    } else {
      hash2[t[j]] = 1;
    }
  }
  for (var k = 0; k < s.length; k++) {
    if (hash2[s[k]] != hash1[s[k]]) {
      console.log(hash2[k]);
      return false;
    }
  }
  return true;
};

// *********************************************************** optimized ***********************************************************

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  var hash = {};
  for (let alph of s) {
    hash[alph] = (hash[alph] || 0) + 1; // create hash of first string
  }
  for (let alph of t) {
    if (!hash[alph]) return false; // if hash of 2nd string alphabet is not there return false else subtract 1 from hash
    hash[alph]--;
  }
  return true;
};

const s = "anagram",
  t = "nagaram";
console.log("Here is the result", isAnagram(s, t));
