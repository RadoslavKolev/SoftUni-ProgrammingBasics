function multiplyByTwo(input) {
    let number = Number(input[0]);
    let index = 1;

    while (number >= 0) {
        let product = number * 2;
        console.log(`Result: ${product.toFixed(2)}`);
        number = Number(input[index]);
        index++;
    }

    if (number < 0) {
        console.log(`Negative number!`);
    }
}

// multiplyByTwo([12, 43.2144, 12.3, 543.23, -20]);
// multiplyByTwo([23.43, 12.3245, 0, 65.23432, 23, 65, -12]);
multiplyByTwo([-123]);