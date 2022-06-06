function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let location = '';
    let placeToStay = '';
    let price = 0;

    if (budget <= 1000) {
        placeToStay = 'Camp';
        if (season === 'Summer') {
            location = 'Alaska';
            price = budget * 65 / 100;
        } else {
            location = 'Morocco';
            price = budget * 45 / 100;
        }
    } else if (budget > 1000 && budget <= 3000) {
        placeToStay = 'Hut';
        if (season === 'Summer') {
            location = 'Alaska';
            price = budget * 80 / 100;          
        } else {
            location = 'Morocco';
            price = budget * 60 / 100;
        }
    } else {
        placeToStay = 'Hotel';
        if (season === 'Summer') {
            location = 'Alaska';
        } else {
            location = 'Morocco';
        }
        price = budget * 90 / 100;
    }

    console.log(`${location} - ${placeToStay} - ${(Math.round(price * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2)}`);
}

// var number = Math.round(num * Math.pow(10, length)) / Math.pow(10, length);

// vacation([800, 'Summer']);
vacation([799.50, 'Winter']);
// vacation([1100, 'Summer']);
// vacation([2543.99, 'Winter']);
// vacation([3460, 'Summer']);
// vacation([5000, 'Winter']);