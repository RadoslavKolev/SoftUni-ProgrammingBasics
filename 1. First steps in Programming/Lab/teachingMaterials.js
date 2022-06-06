function countPrice(input) {
    const penPrice = 5.80;
    const markerPrice = 7.20;
    const preparationPerLitre = 1.20;

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparations = Number(input[2]);
    let discount = Number(input[3]);

    let penTotal = pens * penPrice;
    let markerTotal = markers * markerPrice;
    let preparationTotal = preparations * preparationPerLitre;
    let totalPrice = penTotal + markerTotal + preparationTotal;
    let finalPrice = totalPrice - (totalPrice * discount / 100);

    console.log(finalPrice);
}

countPrice(['2', '3', '4', '25']);
countPrice(['4', '2', '5', '13']);