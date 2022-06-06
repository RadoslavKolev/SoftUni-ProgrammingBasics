function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let months = 4;
    let pricePerKm = 0;
    let taxes = 10 / 100;

    switch(season) {
        case 'Spring': case 'Autumn':
            if (kmPerMonth <= 5000) {
                pricePerKm = 0.75;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                pricePerKm = 0.95;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                pricePerKm = 1.45;
            }
            break;
        case 'Summer':
            if (kmPerMonth <= 5000) {
                pricePerKm = 0.90;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                pricePerKm = 1.10;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                pricePerKm = 1.45;
            }
            break;
        case 'Winter':
            if (kmPerMonth <= 5000) {
                pricePerKm = 1.05;
            } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                pricePerKm = 1.25;
            } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                pricePerKm = 1.45;
            }
            break;
        default:
            console.log(`No such season!`);
    }

    let salary = kmPerMonth * pricePerKm;
    salary *= months;
    salary = salary - (salary * taxes);
    
    console.log(salary.toFixed(2));
}

truckDriver(['Summer', 3455]);
truckDriver(['Winter', 4350]);
truckDriver(['Winter', 5678]);
truckDriver(['Winter', 16042]);
truckDriver(['Spring', 1600]);
truckDriver(['Autumn', 8600]);
truckDriver(['Spring', 16942]);