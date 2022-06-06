function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let RAMs = Number(input[3]);

    let videoCardsPrice = videoCards * 250;

    let pricePerProcessor = videoCardsPrice * 35 / 100;
    let processorsPrice = processors * pricePerProcessor;

    let pricePerRAM = videoCardsPrice * 10 / 100;
    let RAMsPrice = RAMs * pricePerRAM;

    let totalPrice = videoCardsPrice + processorsPrice + RAMsPrice;

    let discount = 0.0;

    if (videoCards > processors) {
        discount = totalPrice * 15 / 100;
    } 

    let finalPrice = totalPrice - discount;

    if (finalPrice <= budget) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(['900', '2', '1', '3']);
shopping(['920.45', '3', '1', '1']);