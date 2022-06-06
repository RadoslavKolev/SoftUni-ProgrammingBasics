function reportSystem(input) {
    let requiredSum = Number(input.shift());

    let expectedSum = 0;
    let counter = 1;
    let cardSum = 0;
    let cashSum = 0;
    let cardCount = 0;
    let cashCount = 0;

    while (true) {
        let command = input.shift();

        if (command === 'End') {
            break;
        }

        if (counter % 2 === 0) {
            if (command < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cardSum += Number(command);
                expectedSum += Number(command);
                cardCount++;
            }
        } else {
            if (command > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cashSum += Number(command);
                expectedSum += Number(command);
                cashCount++;
            }
        }

        if (expectedSum >= requiredSum) {
            break;
        }

        counter++;
    }

    if (expectedSum >= requiredSum) {
        let avgCash = (cashSum / cashCount).toFixed(2);
        let avgCard = (cardSum / cardCount).toFixed(2);
        console.log(`Average CS: ${avgCash}`);
        console.log(`Average CC: ${avgCard}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }
}

reportSystem(['500', '120', '8', '63', '256', '78', '317']);