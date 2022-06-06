function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let ticketPrice = 0;

    if (category === 'VIP') {
        ticketPrice = 499.99;
    } else {
        ticketPrice = 249.99;
    }

    let transportPrice = 0;

    if (people >= 1 && people <= 4) {
        transportPrice = budget * 75 / 100;
    } else if (people >= 5 && people <= 9) {
        transportPrice = budget * 60 / 100;
    } else if (people >= 10 && people <= 24) {
        transportPrice = budget * 50 / 100;
    } else if (people >= 25 && people <= 49) {
        transportPrice = budget * 40 / 100;
    } else {
        transportPrice = budget * 25 / 100;
    }

    budget -= transportPrice;

    let total = people * ticketPrice;

    if (budget >= total) {
        let moneyLeft = (budget - total).toFixed(2);
        console.log(`Yes! You have ${moneyLeft} leva left.`);
    } else {
        let moneyNeeded = (total - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva.`);
    }
}

matchTickets([1000, 'Normal', 1]);
matchTickets([30000, 'VIP', 49]);