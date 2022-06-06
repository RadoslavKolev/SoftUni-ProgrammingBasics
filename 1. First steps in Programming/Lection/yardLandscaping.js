function calculatePrice(input) {
    let sqmLandscape = input[0];

    let totalPrice = sqmLandscape * 7.61;
    let discount = totalPrice * 0.18;
    let finalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculatePrice(['550']);
calculatePrice(['150']);
