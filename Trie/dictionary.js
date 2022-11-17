//----------------------------------------------------------------------------------------------------------------
var TrieNode = function () {
  this.children = {};
  this.word = false;
};

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let current = this.root;
  for (const letter of word) {
    if (!current.children[letter]) current.children[letter] = new TrieNode();
    current = current.children[letter];
  }
  current.word = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (index, root) => {
    ///function inside a function
    let current = root;

    for (let i = index; i < word.length; i++) {
      let char = word[i];

      if (char === ".") {
        //use backtracking to
        for (const char of Object.keys(current.children)) {
          if (dfs(i + 1, current.children[char])) {
            return true;
          } else {
          }
        }
        return false;
      } else {
        if (!current.children[char]) {
          return false;
        }
        current = current.children[char];
      }
    }
    return current.word;
  };

  return dfs(0, this.root); // call the DFS
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/*
use a trie
add word done
search: dfs 
to handle commas: iterate through object.keys and see if you can reach a word


*/

//----------------------------------------------------------------------------------------------------------------

var TrieNode = function () {
  this.children = {}; // at max 26 children because 26 alphabets
  this.isEnd = false;
};

var WordDictionary = function () {
  this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function (word) {
  let cur = this.root;
  for (let letter in word) {
    if (!cur.children[letter]) cur.children[letter] = new TrieNode();
    cur = cur.children[letter];
  }
  cur.isEnd = true;
};

WordDictionary.prototype.search = function (word) {
  var dfs = function (index, root) {
    var cur = root;
    for (let i = index; i < word.length; i++) {
      if (word[i] == ".") {
        for (let char in Object.keys(cur.children))
          if (dfs(i + 1, cur.children[word[i]])) return true;
          else {
          }
      } else {
        if (!cur.children[word[i]]) {
          return false;
        }
      }
    }
  };

  dfs(0, this.root);
};
