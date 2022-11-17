/*
 * @param dictionary: a list of words
 */
var ValidWordAbbr = function (dictionary) {
  // do intialization if necessary
  let hash = [];
  for (let i = 0; i < dictionary.length; i++) {
    let abbr =
      dictionary[i][0] +
      (dictionary.length - 2) +
      dictionary[i][dictionary[i].length - 1];
    this.hash[abbr] = 1;
  }
  console.log(hash);
};

/*
 * @param word: a string
 * @return: true if its abbreviation is unique or false
 */
var isUnique = function (word) {
  // write your code here
};
