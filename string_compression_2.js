const cache = {};

function encode(s) {
    let counter = 0;
    let result = '';
    let stack = [];
    while (counter <= s.length) {
        if (stack[0] === s[counter]) {
            stack.push(s[counter]);
        } else if (stack[0] !== s[counter]) {
            if (typeof stack[0] !== 'undefined') {
                result += stack[0];
                if (stack.length > 1) {
                    result += `${stack.length}`
                }
                stack = [s[counter]];
            } else {
                stack.push(s[counter])
            }
        }
        counter++;
    }
    
    return result;
}


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    if (typeof cache[s] !== 'undefined') {
        return cache[s];
    }

    console.log({ s, k });
    if (k === 0) {
        console.log({ subresult: encode(s).length });
        const min = encode(s).length;
        cache[s] = min;
        return min;
    }

    const results = [];
    for (let i=0; i < s.length; i++) {
        results.push(getLengthOfOptimalCompression(`${s.substr(0, i)}${s.substr(i + 1)}`, k - 1));
    }

    const min = Math.min(...results, encode(s).length);
    cache[s] = min;
    return min;
};

console.log({ result: getLengthOfOptimalCompression("abc", 2) }); // 1