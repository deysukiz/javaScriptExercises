// This file contains exercises from the chapter 2 of the Eloquent JavaScript book

console.log('Hello World');

console.log('\nLooping a triangle');
let count = 0;
let hash = '';
while (count < 7) {
    console.log(hash += '# ');
    count++;
}

console.log('\nChessboard');

let size = 8;
let grid = '';
for (let c = 0; c < size; c++) {
    for (let d = 0; d < size; d++) {
        if ((c + d) % 2 == 0) {
            grid += ' ';
        } else {
            grid += '#';
        }
    }
    grid += '\n';
}
console.log(grid);