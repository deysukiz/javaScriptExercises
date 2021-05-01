// The sum of a range
function range(start, end, step = 1) {
    let numberArray = [];
    if (step > 0) {
        for (let c = start; c <= end; c += step) {
            numberArray.push(c);
        }
    } else {
        for (let c = start; c >= end; c += step) {
            numberArray.push(c);
        }
    }
    return numberArray;
}

function sum(numberArray) {
    let sumNumbers = 0;
    for (const number of numberArray) {
        sumNumbers += number;
    }
    return sumNumbers;
}
console.log("The sum of a range");
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));