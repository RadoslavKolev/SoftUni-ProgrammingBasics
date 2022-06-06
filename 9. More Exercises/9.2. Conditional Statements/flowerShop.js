function flowerShop(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliaPrice = 3.25
    let hyacinthPrice = 4.00;
    let rosePrice = 3.50;
    let cactusPrice = 8.00;

    let total = magnolias * magnoliaPrice + hyacinths * hyacinthPrice + 
        roses * rosePrice + cactuses * cactusPrice;

    let profit = total - (total * 5 / 100);

    if (profit >= giftPrice) {
        let moneyLeft = Math.floor(profit - giftPrice);
        console.log(`She is left with ${moneyLeft} leva.`);
    } else {
        let moneyNeeded = Math.ceil(giftPrice - profit);
        console.log(`She will have to borrow ${moneyNeeded} leva.`);
    }
}

flowerShop([2, 3, 5, 1, 50]);
flowerShop([15, 7, 5, 10, 100]);