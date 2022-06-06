function fuelTank2(input) {
    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    let fuelType = input[0];
    let litresFuel = Number(input[1]);
    let discountCard = input[2];

    let total = 0;

    switch(fuelType) {
        case 'Gasoline':
            if (discountCard === 'Yes') {
                gasolinePrice -= 0.18;
            }
            total = litresFuel * gasolinePrice;
            break;
        case 'Diesel':
            if (discountCard === 'Yes') {
                dieselPrice -= 0.12;
            }
            total = litresFuel * dieselPrice;
            break;
        case 'Gas':
            if (discountCard === 'Yes') {
                gasPrice -= 0.08;
            }
            total = litresFuel * gasPrice;
            break;
    }

    if (litresFuel >= 20 && litresFuel <= 25) {
        total = total - (total * 8 / 100);
    } else if (litresFuel > 25) {
        total = total - (total * 10 / 100);
    }

    console.log(`${total.toFixed(2)} lv.`);
}

fuelTank2(['Gas', 30, 'Yes']);
fuelTank2(['Gasoline', 25, 'No']);
fuelTank2(['Diesel', 19, 'No']);