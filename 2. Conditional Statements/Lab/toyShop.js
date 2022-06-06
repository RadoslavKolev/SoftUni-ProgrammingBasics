function toyShop(input) {  
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let puffyBears = Number(input[3]);
    let minions = Number(input[4]);
    let toyTrucks = Number(input[5]);

    let total = puzzles * 2.60 + talkingDolls * 3.00 + puffyBears * 4.10 +
                minions * 8.20 + toyTrucks * 2.00;
    
    let toys = puzzles + talkingDolls + puffyBears + minions + toyTrucks;
    let discount = 0.0;

    if (toys >= 50) {
        discount = total * 25 / 100;
    }

    let finalPrice = total - discount;
    let rent = finalPrice * 10 / 100;
    let profit = finalPrice - rent;

    if (profit >= excursionPrice) {
        console.log(`Yes! ${(profit - excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursionPrice - profit).toFixed(2)} lv needed.`);
    }
}

toyShop(['40.8', '20', '25', '30', '50', '10']);
toyShop(['320', '8', '2', '5', '5', '1']);
