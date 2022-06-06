function smallShop(input) {
    let product = String(input[0]);
    let city = String(input[1]);
    let quantity = Number(input[2]);

    let coffee, water, beer, sweets, peanuts;
    let total = 0.0;

    switch(city) {
        case 'Sofia':
            coffee = 0.50;
            water = 0.80;
            beer = 1.20;
            sweets = 1.45;
            peanuts = 1.60;
            break;
        case 'Plovdiv':
            coffee = 0.40;
            water = 0.70;
            beer = 1.15;
            sweets = 1.30;
            peanuts = 1.50;
            break;
        case 'Varna':
            coffee = 0.45;
            water = 0.70;
            beer = 1.10;
            sweets = 1.35;
            peanuts = 1.55;
            break;
        default:
            console.log(`Available cities: Sofia, Plovdiv and Varna!`);
    }

    switch(product) {
        case 'coffee':
            total = quantity * coffee;
            break;
        case 'water':
            total = quantity * water;
            break;
        case 'beer':
            total = quantity * beer;
            break;
        case 'sweets':
            total = quantity * sweets;
            break;
        case 'peanuts':
            total = quantity * peanuts;
            break;
        default:
            console.log(`No such product!`);
    }

    console.log(total);
}

smallShop(['coffee', 'Varna', 2]);
smallShop(['peanuts', 'Plovdiv', 1]);
smallShop(['beer', 'Sofia', 2]);
smallShop(['water', 'Plovdiv', 2]);
smallShop(['sweets', 'Sofia', 2.23]);