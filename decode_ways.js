const single = {};
const two = {};

const decode = (string, isSingle) => {
  if (isSingle && typeof single[string] !== "undefined") {
    return single[string];
  } else if (!isSingle && typeof two[string] !== "undefined") {
    return two[string];
  }

  if (isSingle) {
    if (string.length === 1 && string !== "0") {
      single[string] = 1;
      return 1;
    }

    if (string.substr(0, 1) !== "0") {
      const paths =
        decode(string.substr(1), true) + decode(string.substr(1), false);
      single[string] = paths;
      return paths;
    }

    single[string] = 0;
    return 0;
  }

  if (string.length < 2 || string.substr(0, 1) === "0") {
    two[string] = 0;
    return 0;
  }

  if (Number(string.substr(0, 2)) <= 27) {
    if (string.length === 2) {
      two[string] = 1;
      return 1;
    }
    const paths =
      decode(string.substr(2), true) + decode(string.substr(2), false);
    two[string] = paths;
    return paths;
  }

  two[string] = 0;
  return 0;
};

const numDecodings = (s) => {
  return decode(s, true) + decode(s, false);
};
