function bonusScore(input) {
    let points = Number(input[0]);
    let bonus = 0.0;

    if(points <= 100) {
        bonus = 5;
    } else if(points > 100 && points <= 1000) {
        bonus = points * 20 / 100;
    } else {
        bonus = points * 10 / 100;
    }

    if(points % 2 === 0) {
        bonus += 1;
    } else if(points % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(points + bonus);
}

bonusScore(['20']);
bonusScore(['175']);
bonusScore(['2703']);
bonusScore(['15875']);