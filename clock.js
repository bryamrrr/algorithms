const values = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9,
    'K': 10,
    'L': 11,
    'M': 12,
    'N': 13,
    'O': 14,
    'P': 15,
    'Q': 16,
    'R': 17,
    'S': 18,
    'T': 19,
    'U': 20,
    'V': 21,
    'W': 22,
    'X': 23,
    'Y': 24,
    'Z': 25,
}

function getTime(s) {
    // Write your code here
    let index = 0;
    let first = 'A';
    let second = s[index];
    let time = 0;
    
    while (index < s.length) {
        let diffLeft = values[first] - values[second];
        diffLeft = diffLeft < 0 ? diffLeft + 26 : diffLeft;
        let diffRight = values[second] - values[first];
        diffRight = diffRight < 0 ? diffRight + 26 : diffRight;

        let diff = Math.min(diffLeft, diffRight);
        
        time += diff;
        first = second;
        second = s[index + 1];
        index++;
    }
    
    return time;
}

console.log(getTime('AZGB'))