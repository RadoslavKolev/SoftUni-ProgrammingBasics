function equalPairs(input) {
    let numbers = Number(input[0]);

    let firstPairValue = 0;
    let maxDiff = 0;

    let index1 = 1; 
    let index2 = 2; 

    let flag = false;

    for (let i = 1; i <= numbers; i++) {
        let currentNum1 = Number(input[index1]);
        let currentNum2 = Number(input[index2]);

        if (i === 1) {
            firstPairValue = currentNum1 + currentNum2;
            index1 += 2;
            index2 += 2;
            continue;
        }

        let currentValue = currentNum1 + currentNum2;

        if (currentValue !== firstPairValue) {
            flag = true;
            let currentDiff = Math.abs(currentValue - firstPairValue);
            firstPairValue = currentValue;
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }

        index1 += 2;
        index2 += 2;
    }

    if (flag) {
        console.log(`No, maxdiff=${maxDiff}`);
    } else {
        console.log(`Yes, value=${firstPairValue}`);
    }
}

// equalPairs([3,1,2,0,3,4,-1]);
// equalPairs([2,1,2,2,2]);
// equalPairs([4,1,1,3,1,2,2,0,0]);
// equalPairs([1,5,5]);
// equalPairs([2, -1, 0, 0, -1]);
equalPairs([2, -1, 2, 0, -1]);