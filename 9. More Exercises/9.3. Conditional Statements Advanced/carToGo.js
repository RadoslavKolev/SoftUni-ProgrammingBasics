function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carType = '';
    let carClass = '';
    let carPrice = 0;

    if (budget <= 100) {
        carClass = 'Economy class';
        if (season === 'Summer') {
            carType = 'Cabrio';
            carPrice = budget * 35 / 100;
        } else {
            carType = 'Jeep';
            carPrice = budget * 65 / 100;
        }
    } else if (budget > 100 && budget <= 500) {
        carClass = 'Compact class';
        if (season === 'Summer') {
            carType = 'Cabrio';
            carPrice = budget * 45 / 100;
        } else {
            carType = 'Jeep';
            carPrice = budget * 80 / 100;
        }
    } else {
        carClass = 'Luxury class';
        carType = 'Jeep';
        carPrice = budget * 90 / 100;
    }

    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

carToGo([450, 'Summer']);
carToGo([450, 'Winter']);
carToGo([1010, 'Summer']);
carToGo([1010, 'Winter']);
carToGo([99.99, 'Summer']);
carToGo([70.50, 'Winter']);