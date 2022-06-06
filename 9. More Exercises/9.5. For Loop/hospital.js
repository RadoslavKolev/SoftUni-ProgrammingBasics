function hospital(input) {
    let period = Number(input[0]);

    let doctors = 7;
    let examined = 0;
    let unexamined = 0;

    for (let day = 1; day <= period; day++) {
        if (day % 3 === 0 && examined < unexamined) {
            doctors++;       
        }

        let patientsForTheDay = Number(input[day]);

        if (patientsForTheDay <= doctors) {
            examined += patientsForTheDay;
        } else {
            examined += doctors;
            patientsForTheDay -= doctors;
            unexamined += patientsForTheDay;
        }     
    }

    console.log(`Treated patients: ${examined}.`);
    console.log(`Untreated patients: ${unexamined}.`);
}

// hospital(['4', '7', '27', '9', '1']);
hospital(['6', '25', '25', '25', '25', '25', '2']);