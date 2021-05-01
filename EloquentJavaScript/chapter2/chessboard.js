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