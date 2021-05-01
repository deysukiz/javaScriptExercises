for (let c = 1; c <= 30; c++) {
    if ((c % 3 == 0) && (c % 5 == 0)) {
        console.log('FizzBuzz');
    } else if (c % 3 == 0) {
        console.log("Fizz");
    } else if (c % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(c);
    }
}