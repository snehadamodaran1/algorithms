var minimumLengthEncoding = function (W) {
  let set = new Set(W);
  console.log(set);
  for (let word of W)
    if (set.has(word))
      for (let i = 1; i < word.length; i++) {
        console.log(word.slice(0, i), set);
        set.delete(word.slice(i));
      }
  return Array.from(set).join().length + 1; // remaining length of remnaing words with 1 for each #
};

words = ["time", "me", "bell"];
console.log(minimumLengthEncoding(words));
