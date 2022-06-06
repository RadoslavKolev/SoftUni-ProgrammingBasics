function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trace = input[2];

    let juniorTax = 0;
    let seniorTax = 0;

    switch(trace) {
        case 'trail':
            juniorTax = 5.50;
            seniorTax = 7.00;
            break;
        case 'cross-country':
            juniorTax = 8.00;
            seniorTax = 9.50;
            if ((juniors + seniors) >= 50) {
                juniorTax = juniorTax - (juniorTax * 25 / 100);
                seniorTax = seniorTax - (seniorTax * 25 / 100);
            }
            break;
        case 'downhill':
            juniorTax = 12.25;
            seniorTax = 13.75;
            break;
        case 'road':
            juniorTax = 20.00;
            seniorTax = 21.50;
            break;
        default:
            console.log(`No such trace!`);
    }

    let total = juniors * juniorTax + seniors * seniorTax;
    let costs = total * 5 / 100;

    let donation = (total - costs).toFixed(2);

    console.log(`${donation}`);
}

bikeRace([10, 20, 'trail']);
bikeRace([21, 26, 'cross-country']);
bikeRace([30, 25, 'cross-country']);
bikeRace([10, 10, 'downhill']);
bikeRace([3, 40, 'road']);
