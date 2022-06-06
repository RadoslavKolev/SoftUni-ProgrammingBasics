function pets(input) {
    let days = Number(input[0]);
    let leftFood = Number(input[1]);            // kg
    let dogFoodPerDay = Number(input[2]);       // kg
    let catFoodPerDay = Number(input[3]);       // kg
    let turtleFoodPerDay = Number(input[4]);    // gr

    let dogFood = days * dogFoodPerDay;
    let catFood = days * catFoodPerDay;
    let turtleFood = days * turtleFoodPerDay / 1000;    // in kg

    let totalFood = dogFood + catFood + turtleFood;

    if (totalFood <= leftFood) {
        let foodLeft = Math.floor(leftFood - totalFood);
        console.log(`${foodLeft} kilos of food left.`);
    } else {
        let foodNeeded = Math.ceil(totalFood - leftFood);
        console.log(`${foodNeeded} more kilos of food are needed.`);
    }
}

pets([2, 10, 1, 1, 1200]);
pets([5, 10, 2.1, 0.8, 321]);