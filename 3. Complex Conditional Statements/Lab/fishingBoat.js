function fishingBoat(input) {
    let budget = parseInt(input[0]);
    let season = String(input[1]);
    let fishers = parseInt(input[2]);

    if ((budget < 1 || budget > 8000) || (fishers < 4 || fishers > 18)) {
        return;
    }

    let fishRent = 0;

    switch(season) {
        case 'Spring':
            fishRent = 3000;
            break;
        case 'Summer': case 'Autumn':
            fishRent = 4200;
            break;
        case 'Winter':
            fishRent = 2600;
            break;
        default:
            return;
    }

    if (fishers <= 6) {
        fishRent = fishRent - (fishRent * 10 / 100);
    } else if (fishers > 6 && fishers <= 11) {
        fishRent = fishRent - (fishRent * 15 / 100);
    } else if (fishers > 11) {
        fishRent = fishRent - (fishRent * 25 / 100);
    }

    if (fishers % 2 === 0 && season !== 'Autumn') {
        fishRent = fishRent - (fishRent * 5 / 100);
    }

    if (budget >= fishRent) {
        console.log(`Yes! You have ${(budget - fishRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(fishRent - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(['3000', 'Summer', '11']);
fishingBoat(['3600', 'Autumn', '6']);
fishingBoat(['2000', 'Winter', '13']);