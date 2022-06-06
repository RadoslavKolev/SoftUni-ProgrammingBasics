function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decor = budget * 10 / 100;
    let totalClothingPrice = extras * clothingPrice;

    if (extras > 150) {
        let discount = totalClothingPrice * 10 / 100;
        totalClothingPrice -= discount;
    }

    let totalPrice = decor + totalClothingPrice;

    if (budget >= totalPrice) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(['20000', '120', '55.5']);
godzillaVsKong(['15437.62', '186', '57.99']);
godzillaVsKong(['9587.88', '222', '55.68']);