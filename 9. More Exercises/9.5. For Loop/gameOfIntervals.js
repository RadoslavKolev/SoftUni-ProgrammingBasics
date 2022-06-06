function gameOfIntervals(input) {
    let gameMoves = Number(input[0]);

    let numbersBetween0_9 = 0;
    let numbersBetween10_19 = 0;
    let numbersBetween20_29 = 0;
    let numbersBetween30_39 = 0;
    let numbersBetween40_50 = 0;
    let invalidNumbers = 0;

    let startScore = 0;

    for (let i = 1; i <= gameMoves; i++) {
        let currentMove = Number(input[i]);

        if (currentMove >= 0 && currentMove <= 9) {
            numbersBetween0_9++;
            startScore += currentMove * 20 / 100;
        } else if (currentMove >= 10 && currentMove <= 19) {
            numbersBetween10_19++;
            startScore += currentMove * 30 / 100;
        } else if (currentMove >= 20 && currentMove <= 29) {
            numbersBetween20_29++;
            startScore += currentMove * 40 / 100;
        } else if (currentMove >= 30 && currentMove <= 39) {
            numbersBetween30_39++;
            startScore += 50;
        } else if (currentMove >= 40 && currentMove <= 50) {
            numbersBetween40_50++;
            startScore += 100;
        } else if (currentMove < 0 || currentMove > 50) {
            invalidNumbers++;
            startScore /= 2;
        }
    }

    let percentage0_9 = (numbersBetween0_9 / gameMoves * 100).toFixed(2);
    let percentage10_19 = (numbersBetween10_19 / gameMoves * 100).toFixed(2);
    let percentage20_29 = (numbersBetween20_29 / gameMoves * 100).toFixed(2);
    let percentage30_39 = (numbersBetween30_39 / gameMoves * 100).toFixed(2);
    let percentage40_50 = (numbersBetween40_50 / gameMoves * 100).toFixed(2);
    let percentageInvalid = (invalidNumbers / gameMoves * 100).toFixed(2);

    console.log(startScore.toFixed(2));
    console.log(`From 0 to 9: ${percentage0_9}%`);
    console.log(`From 10 to 19: ${percentage10_19}%`);
    console.log(`From 20 to 29: ${percentage20_29}%`);
    console.log(`From 30 to 39: ${percentage30_39}%`);
    console.log(`From 40 to 50: ${percentage40_50}%`);
    console.log(`Invalid numbers: ${percentageInvalid}%`);
}

gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);