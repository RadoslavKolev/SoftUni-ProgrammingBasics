function skiTrip(input) {
    let days = parseInt(input[0]);
    let room = String(input[1]);
    let rating = String(input[2]);

    let price = 0.0;
    let total = 0.0;
    let nights = days - 1;

    switch(room) {
        case 'room for one person':
            price = 18.00;
            total = price * nights;
            break;
        case 'apartment':
            price = 25.00;
            total = price * nights;
            if (nights < 10) {
                total = total - (total * 30 / 100);
            } else if (nights >= 10 && nights <= 15) {
                total = total - (total * 35 / 100);
            } else if (nights > 15) {
                total = total - (total * 50 / 100);
            }
            break;
        case 'president apartment':
            price = 35.00;
            total = price * nights;
            if (nights < 10) {
                total = total - (total * 10 / 100);
            } else if (nights >= 10 && nights <= 15) {
                total = total - (total * 15 / 100);
            } else if (nights > 15) {
                total = total - (total * 20 / 100);
            }
            break;
        default:
            console.log('error');
    }

    if (rating === 'positive') {
        total = total + (total * 25 / 100);
    } else if (rating === 'negative') {
        total = total - (total * 10 / 100);
    }

    console.log(total.toFixed(2));
}

skiTrip(['14', 'apartment', 'positive']);
skiTrip(['30', 'president apartment', 'negative']);
skiTrip(['12', 'room for one person', 'positive']);
skiTrip(['2', 'apartment', 'positive']);