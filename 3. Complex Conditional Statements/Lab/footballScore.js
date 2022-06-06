function footballScore(input) {
    let first = String(input[0]);
    let second = String(input[1]);
    let third = String(input[2]);

    let hostFirst = Number(first.charAt(0));
    let guestFirst = Number(first.charAt(2));
    let hostSecond = Number(second.charAt(0));
    let guestSecond = Number(second.charAt(2));
    let hostThird = Number(third.charAt(0));
    let guestThird = Number(third.charAt(2));

    let won = 0, lost = 0, draw = 0;

    if (hostFirst > guestFirst) {
        won++;
    } else if (hostFirst < guestFirst) {
        lost++;
    } else {
        draw++;
    }

    if (hostSecond > guestSecond) {
        won++;
    } else if (hostSecond < guestSecond) {
        lost++;
    } else {
        draw++;
    }

    if (hostThird > guestThird) {
        won++;
    } else if (hostThird < guestThird) {
        lost++;
    } else {
        draw++;
    }

    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`); 
}

footballScore(['3:1', '0:2', '0:0']);
footballScore(['4:2', '0:3', '1:0']);
footballScore(['0:2', '0:1', '3:3']);