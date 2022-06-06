function flowers(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let chrysanthemumPrice = 0;
    let rosePrice = 0;
    let tulipPrice = 0;

    let arranging = 2.00;

    switch(season) {
        case 'Spring': case 'Summer':
            chrysanthemumPrice = 2.00;
            rosePrice = 4.10;
            tulipPrice = 2.50;
            break;
        case 'Autumn': case 'Winter': 
            chrysanthemumPrice = 3.75;
            rosePrice = 4.50;
            tulipPrice = 4.15;
            break;
        default:
            console.log(`No such season`);
    }

    let totalPrice = chrysanthemums * chrysanthemumPrice + roses * rosePrice + tulips * tulipPrice;

    if (isHoliday === 'Y') {
        totalPrice = totalPrice + (totalPrice * 15 / 100);
    }
    if (tulips > 7 && season === 'Spring') {
        totalPrice = totalPrice - (totalPrice * 5 / 100);
    }
    if (roses >= 10 && season === 'Winter') {
        totalPrice = totalPrice - (totalPrice * 10 / 100);
    }
    if ((chrysanthemums + roses + tulips) > 20) {
        totalPrice = totalPrice - (totalPrice * 20 / 100);
    }

    totalPrice = (totalPrice + arranging).toFixed(2);
    console.log(totalPrice);
}

flowers([2, 4, 8, 'Spring', 'Y']);
flowers([3, 10, 9, 'Winter', 'N']);
flowers([10, 10, 10, 'Autumn', 'N']);