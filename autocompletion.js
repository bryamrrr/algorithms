function WordSearch() {
  this.words = {};

  this.addWord = (word) => {
    let ref = this.words;

    word.split("").forEach((char, index) => {
      ref[char] = ref[char] || {};
      ref = ref[char];
      if (index === word.length - 1) {
        ref._last = true;
      }
    });
  };

  this.autocomplete = (letters) => {
    const ref = this._getObj(letters);
    return this._getWords(ref, letters);
  };

  this._getObj = (letters) => {
    let ref = this.words;
    letters.split("").forEach((char) => {
      ref = ref && ref[char];
    });
    return ref;
  };

  this._getWords = (ref, string = "") => {
    if (!ref) {
      return [];
    }

    let results = [];
    if (ref._last) {
      results.push(string);
    }

    const keys = Object.keys(ref).filter((key) => key !== "_last");
    keys.forEach((key) => {
      results = results.concat(this._getWords(ref[key], string + key));
    });

    return results; 
  };
}

const search = new WordSearch();
search.addWord("dog");
search.addWord("door");
search.addWord("dark");
search.addWord("cat");
search.addWord("elephant");

console.log(search.autocomplete("do"));
