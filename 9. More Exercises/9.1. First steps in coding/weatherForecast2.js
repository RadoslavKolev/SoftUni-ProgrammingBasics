function weatherForecast2(input) {
    let gradus = Number(input[0]);

    if (gradus >= 26.00 && gradus <= 35.00) {
        console.log('Hot');
    } else if (gradus >= 20.1 && gradus <= 25.9) {
        console.log('Warm');
    } else if (gradus >= 15.00 && gradus <= 20.00) {
        console.log('Mild');
    } else if (gradus >= 12.00 && gradus <= 14.9) {
        console.log('Cool');
    } else if (gradus >= 5.00 && gradus <= 11.9) {
        console.log('Cold');
    } else {
        console.log('unknown');
    }
}