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