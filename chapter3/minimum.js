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

console.log('Minimum', min(0, 10));
console.log('Minimum', min(0, -10));
console.log('Minimum', min(5, 5));