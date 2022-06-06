function fruitShop(input) {
    let fruit = String(input[0]);
    let day = String(input[1]);
    let quantity = Number(input[2]);

    let banana, apple, orange, grapefruit, kiwi, pineapple, grapes;
    let total = 0.0;

    switch(day) {
        case 'Monday': case 'Tuesday': case 'Wednesday': case 'Thursday': case 'Friday':
            banana = 2.50;
            apple = 1.20;
            orange = 0.85;
            grapefruit = 1.45;
            kiwi = 2.70;
            pineapple = 5.50;
            grapes = 3.85;
            break;
        case 'Saturday': case 'Sunday':
            banana = 2.70;
            apple = 1.25;
            orange = 0.90;
            grapefruit = 1.60;
            kiwi = 3.00;
            pineapple = 5.60;
            grapes = 4.20;
            break;
        default:
            console.log('error');
            return;
    }

    switch(fruit) {
        case 'banana':
            total = banana * quantity;
            break;
        case 'apple':
            total = apple * quantity;
            break;
        case 'orange':
            total = orange * quantity;
            break;
        case 'grapefruit':
            total = grapefruit * quantity;
            break;
        case 'kiwi':
            total = kiwi * quantity;
            break;
        case 'pineapple':
            total = pineapple * quantity;
            break;
        case 'grapes':
            total = grapes * quantity;
            break;
        default:
            console.log('error');
            return;
    }

    console.log(total.toFixed(2));
}

fruitShop(['apple', 'Tuesday', 2]);
fruitShop(['orange', 'Sunday', 3]);
fruitShop(['kiwi', 'Monday', 2.5]);
fruitShop(['grapes', 'Saturday', 0.5]);
fruitShop(['tomato', 'Monday', 0.5]);