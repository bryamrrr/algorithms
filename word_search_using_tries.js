var WordDictionary = function () {
  this.words = {};

  this.addWord = (word) => {
    let n = 0;
    let ref = this.words;
    while (n < word.length) {
      const char = word[n];
      if (!ref[char]) {
        ref[char] = {};
      }

      ref = ref[char];
      if (n === word.length - 1) {
        ref._last = true;
      }
      n++;
    }
  };

  this.search = (word, dict = this.words) => {
    if (word === "") {
      return !!dict._last;
    }

    let n = 0;
    let ref = dict;

    while (n < word.length - 1 && word[n] !== ".") {
      const char = word[n];
      if (!ref[char]) {
        return false;
      }

      ref = ref[char];
      n++;
    }

    const lastChar = word[n];
    if (word[n] === ".") {
      console.log({ word, n, ref });
      return Object.keys(ref).some((key) => {
        return this.search(word.substring(n + 1), ref[key]);
      });
    }

    if (ref[lastChar] && ref[lastChar]._last) {
      return true;
    }

    return false;
  };
};

const dictionary = new WordDictionary();
dictionary.addWord("bad");
dictionary.addWord("bas");
dictionary.addWord("mad");
console.log(dictionary.search("pad")); // false
console.log(dictionary.search("ba")); // false
console.log(dictionary.search("bad")); // true
console.log(dictionary.search("mad")); // true
console.log(dictionary.search(".ad")); // true
console.log(dictionary.search(".a.")); // true
console.log(dictionary.search("...")); // true
console.log(dictionary.search("..")); // false
