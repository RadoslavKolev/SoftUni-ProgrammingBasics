function journey(input) {
    let budget = parseFloat(input[0]);
    let season = String(input[1]);

    let place = '';
    let placeToStay = '';
    let price = 0.0;

    if (budget <= 100) {
        place = 'Bulgaria';
        if (season === 'summer') {
            placeToStay = 'Camp';
            price = budget * 30 / 100;
        } else if (season === 'winter') {
            placeToStay = 'Hotel';
            price = budget * 70 / 100;
        }
    } else if (budget > 100 && budget <= 1000) {
        place = 'Balkans';
        if (season === 'summer') {
            placeToStay = 'Camp';
            price = budget * 40 / 100;
        } else if (season === 'winter') {
            placeToStay = 'Hotel';
            price = budget * 80 / 100;
        }
    } else if (budget > 1000) {
        place = 'Europe';
        placeToStay = 'Hotel';
        price = budget * 90 / 100;
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${placeToStay} - ${price.toFixed(2)}`);
}

journey(['50', 'summer']);
journey(['75', 'winter']);
journey(['312', 'summer']);
journey(['678.53', 'winter']);
journey(['1500', 'summer']);