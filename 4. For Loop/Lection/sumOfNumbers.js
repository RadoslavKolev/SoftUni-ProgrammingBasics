function sumOfNumbers(input) {
    let number = input[0];
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        let digit = Number(number[i]);
        sum += digit;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(['1234']);
sumOfNumbers(['564891']);