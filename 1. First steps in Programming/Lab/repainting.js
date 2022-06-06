function countCosts(input) {
    const nylonPerSqm = 1.50;
    const paintPerLitre = 14.50;
    const diluentPerLitre = 5.00;
    const bags = 0.40;

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let diluent = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonPrice = (nylon + 2) * nylonPerSqm;
    let paintPrice = (paint + (paint * 10 / 100)) * paintPerLitre;
    let diluentPrice = diluent * diluentPerLitre;
    
    let totalPrice = nylonPrice + paintPrice + diluentPrice + bags;
    let priceForWorkers = (totalPrice * 30 / 100) * workHours;
    let finalPrice = totalPrice + priceForWorkers;

    console.log(finalPrice);
}

countCosts(['10', '11', '4', '8']);
countCosts(['5', '10', '10', '1']);