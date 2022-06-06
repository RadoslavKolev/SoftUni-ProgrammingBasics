function logistics(input) {
    let numberOfGoods = Number(input[0]);

    let totalTons = 0;

    let busPrice = 200;
    let truckPrice = 175;
    let trainPrice = 120;

    let busTons = 0;
    let truckTons = 0;
    let trainTons = 0;

    for (let i = 1; i <= numberOfGoods; i++) {
        let currentTon = Number(input[i]);
        totalTons += currentTon;

        if (currentTon <= 3) {
            busTons += currentTon;
        } else if (currentTon <= 11) {
            truckTons += currentTon;
        } else {
            trainTons += currentTon;
        }
    }

    let averagePerTon = ((busTons * busPrice + truckTons * truckPrice + trainTons * trainPrice) / totalTons).toFixed(2);
    
    let busPercentage = (busTons / totalTons * 100).toFixed(2);
    let truckPercentage = (truckTons / totalTons * 100).toFixed(2);
    let trainPercentage = (trainTons / totalTons * 100).toFixed(2);

    console.log(averagePerTon);
    console.log(`${busPercentage}%`);
    console.log(`${truckPercentage}%`);
    console.log(`${trainPercentage}%`);
}

logistics(['4', '1', '5', '16', '3']);