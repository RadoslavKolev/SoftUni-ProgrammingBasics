function uniquePinCodes(input) {
    let limitFirst = Number(input[0]);
    let limitSecond = Number(input[1]);
    let limitThird = Number(input[2]);

    for (let i = 1; i <= limitFirst; i++) {
        for (let j = 2; j <= limitSecond; j++) {        
            for (let k = 1; k <= limitThird; k++) {
                let prime = true;
                for (let m = 2; m < j; m++) {
                    if (j % m == 0 && j > 2) {
                        prime = false;
                        break;
                    }
                }
                if (i % 2 === 0 && prime && k % 2 === 0) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

uniquePinCodes(["3",
"5",
"5"]);
