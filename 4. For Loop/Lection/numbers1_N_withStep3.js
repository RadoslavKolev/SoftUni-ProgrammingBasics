function numbersN_1_withStep3(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

numbersN_1_withStep3(['10']);
numbersN_1_withStep3(['7']);
numbersN_1_withStep3(['15']);