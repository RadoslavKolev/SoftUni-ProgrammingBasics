function courierExpress(input) {
    let weight = Number(input[0]);
    let service = input[1];
    let distance = Number(input[2]);

    let tax = 0;
    let markupPerKg = 0;
    let markupPerKm = 0;
    let totalMarkup = 0;

    switch(service) {
        case 'standard':
            if (weight < 1) {
                tax = 0.03;
            } else if (weight <= 10) {
                tax = 0.05;
            } else if (weight <= 40) {
                tax = 0.10;
            } else if (weight <= 90) {
                tax = 0.15;
            } else if (weight <= 150) {
                tax = 0.20;
            }
            break;
        case 'express':
            if (weight < 1) {
                tax = 0.03;
                markupPerKg = tax * 80 / 100;
                markupPerKm = weight * markupPerKg;
                totalMarkup = distance * markupPerKm;
            } else if (weight <= 10) {
                tax = 0.05;
                markupPerKg = tax * 40 / 100;
                markupPerKm = weight * markupPerKg;
                totalMarkup = distance * markupPerKm;
            } else if (weight <= 40) {
                tax = 0.10;
                markupPerKg = tax * 5 / 100;
                markupPerKm = weight * markupPerKg;
                totalMarkup = distance * markupPerKm;
            } else if (weight <= 90) {
                tax = 0.15;
                markupPerKg = tax * 2 / 100;
                markupPerKm = weight * markupPerKg;
                totalMarkup = distance * markupPerKm;
            } else if (weight <= 150) {
                tax = 0.20;
                markupPerKg = tax * 1 / 100;
                markupPerKm = weight * markupPerKg;
                totalMarkup = distance * markupPerKm;
            }
            break;
    }

    let transportPrice = distance * tax;
    let total = transportPrice + totalMarkup;

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`);
}

courierExpress(["87",
"express",
"130"]);
