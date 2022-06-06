function order(input) {
    const chickenMenu = 10.35;
    const fishMenu = 12.40;
    const veganMenu = 8.15;
    const delivery = 2.50;

    let chickens = Number(input[0]);
    let fishes = Number(input[1]);
    let vegans = Number(input[2]);

    let chickenPrice = chickens * chickenMenu;
    let fishesPrice = fishes * fishMenu;
    let vegansPrice = vegans * veganMenu;

    let totalPrice = chickenPrice + fishesPrice + vegansPrice;
    let dessertPrice = totalPrice * 20 / 100;
    let finalPrice = totalPrice + dessertPrice + delivery;

    console.log(finalPrice);
}

order(['2', '4', '3']);
order(['9', '2', '6']);