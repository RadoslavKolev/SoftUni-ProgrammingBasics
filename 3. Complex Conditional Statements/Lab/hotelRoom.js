function hotelRoom(input) {
    let month = String(input[0]);
    let nights = parseInt(input[1]);

    let studio, apartment;
    let totalStudio, totalApartment;

    switch(month) {
        case 'May': case 'October':
            studio = 50;
            apartment = 65;
            totalStudio = studio * nights; 
            totalApartment = apartment * nights; 
            if (nights > 7 && nights <= 14) {
                totalStudio = totalStudio - (totalStudio * 5 / 100);
            } else if (nights > 14) {
                totalStudio = totalStudio - (totalStudio * 30 / 100);
                totalApartment = totalApartment - (totalApartment * 10 / 100);
            }
            break;
        case 'June': case 'September':
            studio = 75.20;
            apartment = 68.70;
            totalStudio = studio * nights; 
            totalApartment = apartment * nights;
            if (nights > 14) {
                totalStudio = totalStudio - (totalStudio * 20 / 100);
                totalApartment = totalApartment - (totalApartment * 10 / 100);
            }
            break;
        case 'July': case 'August':
            studio = 76;
            apartment = 77;
            totalStudio = studio * nights; 
            totalApartment = apartment * nights;
            if (nights > 14) {
                totalApartment = totalApartment - (totalApartment * 10 / 100);
            }
            break;
        default:
            console.log('error');
    }

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}

hotelRoom(['May', '15']);
hotelRoom(['June', '14']);
hotelRoom(['August', '20']);