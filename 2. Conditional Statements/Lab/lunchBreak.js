function lunchBreak(input) {
    let series = String(input[0]);
    let episode = Number(input[1]);
    let totalRest = Number(input[2]);

    let lunchBreak = totalRest / 8;
    let smallRest = totalRest / 4;
    let timeLeft = totalRest - lunchBreak - smallRest;

    if (timeLeft >= episode) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeLeft - episode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(episode - timeLeft)} more minutes.`);
    }
}

lunchBreak(['Game of Thrones', '60', '96']);
lunchBreak(['Teen Wolf', '48', '60']);