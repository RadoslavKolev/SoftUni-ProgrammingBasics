function dishwasher(input) {
    let bottles = Number(input.shift());

    let detergent = bottles * 750;
    let detergentNeeded = 0;

    let plates = 0;
    let pots = 0;
    
    let counter = 1;
 
    while (true) {
        let command = input.shift();

        if (command === "End") {
            break;
        }

        if (counter % 3 === 0) {
            detergentNeeded += command * 15;
        } else {
            detergentNeeded += command * 5;
        }

        if (detergentNeeded > detergent) {
            break;
        }

        if (counter % 3 === 0) {
            pots += Number(command);
        } else {
            plates += Number(command);
        }

        counter++;
    }

    if (detergentNeeded <= detergent) {
        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${Math.abs(detergent - detergentNeeded)} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergentNeeded - detergent)} ml. more necessary!`);
    }
}

dishwasher(['2', '53', '65', '55', 'End']);
// dishwasher([1, 10, 15, 10, 12, 13, 30]);