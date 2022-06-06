function easterLunch(input) {
    let easterBreads = Number(input[0]);
    let eggBoxes = Number(input[1]);
    let cookies = Number(input[2]);

    let easterBreadPrice = easterBreads * 3.20;
    let eggsPrice = eggBoxes * 4.35;
    let cookiesPrice = cookies * 5.40;
    let eggPaintPrice = eggBoxes * 12 * 0.15;

    let totalPrice = easterBreadPrice + eggsPrice + cookiesPrice + eggPaintPrice;
    console.log(totalPrice.toFixed(2));
}

easterLunch(["4",
"4",
"3"]);