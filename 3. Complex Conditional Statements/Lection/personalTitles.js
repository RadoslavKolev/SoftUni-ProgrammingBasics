function personalTitles(input) {
    let age = parseFloat(input[0]);
    let gender = String(input[1]);

    switch(gender) {
        case 'm':
            if (age >= 16) {
                console.log('Mr.');
            } else {
                console.log('Master');
            }
            break;
        case 'f':
            if (age >= 16) {
                console.log('Ms.');
            } else {
                console.log('Miss');
            }
            break;
        default:
            console.log('Unknown age');
    }
}

personalTitles(['12', 'f']);
personalTitles(['17', 'm']);
personalTitles(['25', 'f']);
personalTitles(['13.5', 'm']);