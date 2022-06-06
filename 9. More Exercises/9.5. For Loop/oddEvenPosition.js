function oddEvenPosition(input) {
    let numbers = Number(input[0]);

    let oddSum = 0;
    let oddMin = 0;
    let oddMax = 0;
    
    let evenSum = 0;
    let evenMin = 0;
    let evenMax = 0;

    for (let i = 1; i <= numbers; i++) {
        let currentNum = Number(input[i]);

        if (i === 1) {
            oddSum += currentNum
            oddMin = currentNum;
            oddMax = currentNum;
            continue;
        } else if (i === 2) {
            evenSum += currentNum
            evenMin = currentNum;
            evenMax = currentNum;
            continue;
        }

        if (i % 2 === 0) {
            evenSum += currentNum;

            if (currentNum < evenMin) {
                evenMin = currentNum;
            } else if (currentNum > evenMax) {
                evenMax = currentNum;
            }          
        } else {
            oddSum += currentNum;

            if (currentNum < oddMin) {
                oddMin = currentNum;
            } else if (currentNum > oddMax) {
                oddMax = currentNum;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddSum === 0) {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenSum === 0) {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}

// oddEvenPosition([6,2,3,5,4,2,1]);
// oddEvenPosition([2, 1.5, -2.5]);
// oddEvenPosition([1, 1]);
oddEvenPosition([0]);