// Utilizing a recursion function, find if the a number is even or odd
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