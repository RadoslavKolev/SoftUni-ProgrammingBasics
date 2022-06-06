function newHouse(input) {
    let flowers = String(input[0]);
    let numberOfFlowers = parseInt(input[1]);
    let budget = parseInt(input[2]);

    if ((numberOfFlowers < 10 || numberOfFlowers > 1000) || (budget < 50 || budget > 2500)) {
        return;
    }

    let flowerPrice = 0.0;
    let total = 0.0;
    let discount = 0.0;

    switch(flowers) {
        case 'Roses':
            flowerPrice = 5.00;
            total = numberOfFlowers * flowerPrice;
            if (numberOfFlowers > 80) {
                discount = total * 10 / 100;
                total -= discount; 
            }           
            break;
        case 'Dahlias':
            flowerPrice = 3.80;
            total = numberOfFlowers * flowerPrice;
            if (numberOfFlowers > 90) {
                discount = total * 15 / 100;
                total -= discount; 
            } 
            break;
        case 'Tulips':
            flowerPrice = 2.80;
            total = numberOfFlowers * flowerPrice;
            if (numberOfFlowers > 80) {
                discount = total * 15 / 100;
                total -= discount; 
            } 
            break;
        case 'Narcissus':
            flowerPrice = 3.00;
            total = numberOfFlowers * flowerPrice;
            if (numberOfFlowers < 120) {
                discount = total * 15 / 100;
                total += discount; 
            } 
            break;
        case 'Gladiolus':
            flowerPrice = 2.50;
            total = numberOfFlowers * flowerPrice;
            if (numberOfFlowers < 80) {
                discount = total * 20 / 100;
                total += discount; 
            } 
            break;
        default:
            return;
    }

    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

newHouse(['Roses', '55', '250']);
newHouse(['Tulips', '88', '260']);
newHouse(['Narcissus', '119', '360']);