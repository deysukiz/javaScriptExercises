// Minimum
// This function calculate the minimum between 2 numbers
function min(a, b) {
    if (a < b) {
        return a;
    }
    if (b < a) {
        return b;
    } else {
        return null;
    }
}

console.log('Minimo', min(0, 10));
console.log('Minimo', min(0, -10));
console.log('Minimo', min(5, 5));

// Recursion
// Utilizing a recursion function, find is the number is par
function isEven(number) {
    if (number < 0) {
        return isEven(number + 2);
    } else if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log('\nRecursion');
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-34));

//Bean counting
function countBs(word) {
    let numberBs = 0;
    for (let c = 0; c < word.length; c++) {
        if (word[c] == 'B') {
            numberBs++;
        }
    }
    return numberBs;
}

console.log('\nBean counting');
console.log(countBs("BBC"));

//Char counting
function countChar(word, char) {
    let numberChars = 0;
    for (let c = 0; c < word.length; c++) {
        if (word[c] == char) {
            numberChars++;
        }
    }
    return numberChars;
    // return '' + char + ' ' + numberChars;
}

console.log('\nChar counting');
console.log(countChar("BBC", 'C'));
console.log(countChar("kakkerlak", "k"));