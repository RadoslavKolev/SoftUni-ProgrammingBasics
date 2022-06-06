function calculateCost(input) {
    let dogPrice = 2.50;
    let catPrice = 4;

    let dogsCost = dogPrice * input[0];
    let catsCost = catPrice * input[1];
    
    let total = dogsCost + catsCost;
    console.log(`${total} lv.`);
}

calculateCost(['5', '4']);
calculateCost(['13', '9']);