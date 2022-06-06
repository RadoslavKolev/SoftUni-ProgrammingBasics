function fuelTank(input) {
    let fuelType = input[0].toLowerCase();
    let litresFuel = Number(input[1]);

    if (fuelType === 'diesel' || fuelType === 'gasoline' || fuelType === 'gas') {
        if (litresFuel >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    } else {
        console.log(`Invalid fuel!`);
    }
}

fuelTank(['Diesel', 10]);