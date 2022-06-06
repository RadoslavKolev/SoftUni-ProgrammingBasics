function sequence2kPlus1(input) {
    let number = Number(input[0]);

    let counter = 1;
    while (counter <= number) {
        console.log(counter);
        counter = 2 * counter + 1;
    }
}

sequence2kPlus1(['3']);
sequence2kPlus1(['8']);
sequence2kPlus1(['17']);
sequence2kPlus1(['31']);