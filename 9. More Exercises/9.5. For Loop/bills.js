function bills(input) {
    let months = Number(input[0]);

    let waterPrice = 20;
    let internetPrice = 15;

    let electricityBill = 0;
    let otherBills = 0;
    let waterBill = waterPrice * months;
    let internetBill = internetPrice * months;

    for (let i = 1; i <= months; i++) {
        let currentElectricityBill = Number(input[i]);
        electricityBill += currentElectricityBill;

        let currentOther = currentElectricityBill + waterPrice + internetPrice;
        currentOther = currentOther + (currentOther * 20 / 100);
        otherBills += currentOther;
    }

    let averageBills = (electricityBill + waterBill + internetBill + otherBills) / months;

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageBills.toFixed(2)} lv`);
}

bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);