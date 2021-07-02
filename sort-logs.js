/**
 * @param {string[]} logs
 * @return {string[]}
 */
 const isADigitLog = (log)  => {
    const parts = log.split(' ');
    const firstPart = parts[1];
    
    return !isNaN(firstPart)
}

const sortLetters = (letterLogs) => {
    letterLogs.sort((a, b) => {
        const splittedA = a.split(' ');
        const idA = splittedA.shift();
        const aString = splittedA.join(' ');


        const splittedB = b.split(' ');
        const idB= splittedB.shift();
        const bString = splittedB.join(' ');
        
        if (aString < bString) {
            return -1;
        } else if (aString > bString) {
            return 1;
        } else {
            if (idA < idB) {
                return -1;
            } else {
                return 1;
            }
        }
    });
}

var reorderLogFiles = function(logs) {
    let letters = [];
    let digits = [];

    counter = 0;
    while (logs[counter]) {
        if (isADigitLog(logs[counter])) {
            digits.push(logs[counter]);
        } else {
            letters.push(logs[counter]);
        }
        counter++;
    }

    sortLetters();

    return letters.concat(digits);
};

let a = [40, 100];
sortLetters(a);
console.log({a});