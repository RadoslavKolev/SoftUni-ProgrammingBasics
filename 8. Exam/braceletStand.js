function braceletStand(input) {
    let moneyPerDay = Number(input[0]);
    let salesMoneyPerDay = Number(input[1]);
    let costs = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedMoneyFromPockets = 5 * moneyPerDay;
    let savedMoneyFromSales = 5 * salesMoneyPerDay;

    let savedMoney = savedMoneyFromPockets + savedMoneyFromSales;

    savedMoney -= costs;

    if (savedMoney >= giftPrice) {
        console.log(`Profit: ${savedMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - savedMoney).toFixed(2)} BGN.`);
    }
}

braceletStand(["5.12",
"32.05",
"15",
"150"]);
