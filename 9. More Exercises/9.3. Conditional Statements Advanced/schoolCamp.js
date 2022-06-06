function schoolCamp(input) {
    let season = input[0];
    let group = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let pricePerNight = 0;
    let sport = '';

    let total = 0;
    let discount = 0;

    switch(season) {
        case 'Winter':
            switch(group) {
                case 'boys': case 'girls':
                    pricePerNight = 9.60;
                    break;
                case 'mixed':
                    pricePerNight = 10.00;
                    break;
                default:
                    console.log(`No such group!`);
            }
            switch(group) {
                case 'boys':
                    sport = 'Judo';
                    break;
                case 'girls':
                    sport = 'Gymnastics';
                    break;
                case 'mixed':
                    sport = 'Ski';
                    break;
                default:
                    console.log(`No such sport!`);
            }
            break;
        case 'Spring':
            switch(group) {
                case 'boys': case 'girls':
                    pricePerNight = 7.20;
                    break;
                case 'mixed':
                    pricePerNight = 9.50;
                    break;
                default:
                    console.log(`No such group!`);
            }
            switch(group) {
                case 'boys':
                    sport = 'Tennis';
                    break;
                case 'girls':
                    sport = 'Athletics';
                    break;
                case 'mixed':
                    sport = 'Cycling';
                    break;
                default:
                    console.log(`No such sport!`);
            }
            break;
        case 'Summer':
            switch(group) {
                case 'boys': case 'girls':
                    pricePerNight = 15.00;
                    break;
                case 'mixed':
                    pricePerNight = 20.00;
                    break;
                default:
                    console.log(`No such group!`);
            }
            switch(group) {
                case 'boys':
                    sport = 'Football';
                    break;
                case 'girls':
                    sport = 'Volleyball';
                    break;
                case 'mixed':
                    sport = 'Swimming';
                    break;
                default:
                    console.log(`No such sport!`);
            }
            break;
        default:
            console.log(`No such season!`);
    }

    total = nights * pricePerNight * students;;

    if (students >= 50) {
        discount = 50 / 100;
        total = total - (total * discount);
    } else if (students >= 20 && students < 50) {
        discount = 15 / 100;
        total = total - (total * discount);
    } else if (students >= 10 && students < 20) {
        discount = 5 / 100;
        total = total - (total * discount);
    }

    console.log(`${sport} ${total.toFixed(2)} lv.`);
}

schoolCamp(['Spring', 'girls', 20, 7]);
schoolCamp(['Winter', 'mixed', 9, 15]);
schoolCamp(['Summer', 'boys', 60, 7]);
schoolCamp(['Spring', 'mixed', 17, 14]);