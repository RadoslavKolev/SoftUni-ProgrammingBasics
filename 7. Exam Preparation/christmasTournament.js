function christmasTournament(input) {
    let days = Number(input[0]);    // 2

    let index = 1;
    let command = input[index]; // 'volleyball'

    let totalMoney = 0;
    let daysWon = 0;
    let daysLost = 0;

    for (let i = 0; i < days; i++) {
        let won = 0;
        let lost = 0;
        let tempMoney = 0;

        while (command !== 'Finish') {
            index++;
            let game = input[index];    // 'win'

            if (game === 'win') {
                tempMoney += 20;
                won++;
            } else {
                lost++;
            }

            index++;
            command = input[index]; // 'football'
        }

        if (won > lost) {
            tempMoney = tempMoney + (tempMoney * 10 / 100);
            daysWon++;
        } else {
            daysLost++;
        }

        totalMoney += tempMoney;

        index++;
        command = input[index];
    }

    if (daysWon > daysLost) {
        totalMoney = totalMoney + (totalMoney * 20 / 100);
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

christmasTournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);