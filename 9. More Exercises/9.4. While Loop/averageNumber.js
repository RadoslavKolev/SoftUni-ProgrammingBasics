function averageNumber(input) {
    let n = Number(input[0]);

    let total = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);
        total += currentNum;
    }

    let average = (total / n).toFixed(2);
    console.log(average);
}

averageNumber(['4', '3', '2', '4', '2'])
averageNumber(['2', '6', '4']);