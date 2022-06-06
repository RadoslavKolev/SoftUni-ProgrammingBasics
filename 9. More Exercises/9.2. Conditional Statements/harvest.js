function harvest(input) {
    let area = Number(input[0]);
    let grapePerSqm = Number(input[1]);
    let litresNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = area * grapePerSqm;
    let wine = (totalGrapes * 40 / 100) / 2.5

    if (wine < litresNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(litresNeeded - wine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        let litresLeft = Math.ceil(wine - litresNeeded);
        let winePerWorker = Math.ceil(litresLeft / workers);
        console.log(`${litresLeft} liters left -> ${winePerWorker} liters per person.`);
    }
}

harvest([1020, 1.5, 425, 4]);