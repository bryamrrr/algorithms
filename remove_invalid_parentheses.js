/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  let results = {};
  let minRemoved = Infinity;

  const dfs = (str, left, right, removed, depth = 0) => {
    if (depth === s.length) {
      if (left === right) {
        if (removed < minRemoved) {
          minRemoved = removed;
          results = { [str]: true };
        } else if (removed === minRemoved) {
          results[str] = true;
        }
      }
      return;
    }

    if (s[depth] !== "(" && s[depth] !== ")") {
      dfs(str + s[depth], left, right, removed, depth + 1);
    } else {
      if (s[depth] === "(") {
        dfs(str + "(", left + 1, right, removed, depth + 1);
      } else if (s[depth] === ")" && left > right) {
        dfs(str + ")", left, right + 1, removed, depth + 1);
      }
      dfs(str, left, right, removed + 1, depth + 1);
    }
  };

  dfs("", 0, 0, 0);

  return Object.keys(results);
};

console.log(removeInvalidParentheses("()())()"));
