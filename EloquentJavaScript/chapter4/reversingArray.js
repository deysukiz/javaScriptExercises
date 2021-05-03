function reverseArrayWithReverseMethod(arrayValues) {
    return arrayValues.reverse();
}

function reverseArray(arrayValues) {
    let newArray = [];
    for (let c = arrayValues.length - 1; c >= 0; c--) {
        newArray.push(arrayValues[c]);
    }
    return newArray;
}

function reverseArrayInPlace(arrayValue) {
    for (let c = 0; c < Math.floor(arrayValue.length / 2); c++) {
        let temporalValue = arrayValue[c];
        arrayValue[c] = arrayValue[arrayValue.length - (c + 1)];
        arrayValue[arrayValue.length - (c + 1)] = temporalValue;
    }
    return arrayValue;
}

console.log(reverseArrayWithReverseMethod(["A", "B", "C", "E"]));

console.log(reverseArray(["A", "B", "C", "E"]));
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);