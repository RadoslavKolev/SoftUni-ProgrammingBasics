function sleepyTom(input) {
    let restDays = Number(input[0]);

    let yearDays = 365;
    let workDays = yearDays - restDays;

    let gameTime = ((workDays * 63) + (restDays * 127));

    let difference = Math.abs(30000 - gameTime);

    let hours = Math.floor(difference / 60);
    let minutes = difference % 60;

    if (gameTime > 30000) {
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

sleepyTom([20]);
sleepyTom([113]);