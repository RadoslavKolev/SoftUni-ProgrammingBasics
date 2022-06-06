function christmasPreparation(input) {
    let wrappingPapers = Number(input[0]);
    let plats = Number(input[1]);
    let glues = Number(input[2]);
    let discount = Number(input[3]);

    let wrappingPaperPrice = wrappingPapers * 5.80;
    let platPrice = plats * 7.20;
    let gluePrice = glues * 1.20;

    let totalPrice = wrappingPaperPrice + platPrice + gluePrice;

    totalPrice = totalPrice - (totalPrice * discount / 100);
    console.log(totalPrice.toFixed(3));
}

christmasPreparation(["4",
"2",
"5",
"13"]);
