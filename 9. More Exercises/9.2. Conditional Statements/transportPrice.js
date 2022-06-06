function transportPrice(input) {
    let kilometers = Number(input[0]);
    let travel = input[1];

    let tax = 0;
    let totalPrice = 0;

    if (kilometers < 20) {
        let startTax = 0.70;
        if (travel === 'day') {
            tax = 0.79;
        } else {
            tax = 0.90;
        }
        totalPrice = startTax + kilometers * tax;
    } else if (kilometers >= 20 && kilometers < 100) {
        tax = 0.09;
        totalPrice = kilometers * tax;
    } else {
        tax = 0.06;
        totalPrice = kilometers * tax;
    }

    console.log(totalPrice.toFixed(2));
}

transportPrice([5, 'day']);
transportPrice([7, 'night']);
transportPrice([25, 'day']);
transportPrice([180, 'night']);