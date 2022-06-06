function everest(input) {
    let index = 0;
    let command = input[index++];     // Yes

    let startHeight = 5364;
    let target = 8848;
    let days = 1;

    while (command !== 'END') {
        let rest = command;     // Yes
        let height = Number(input[index++]);

        if (rest === 'Yes') {
            days++;
        }

        if (days > 5) {
            console.log("Failed!");
            console.log(startHeight);
            startHeight += height;
            break;
        }

        startHeight += height;

        if (startHeight >= target) {
            console.log(`Goal reached for ${days} days!`);
            break;
        }

        command = input[index++];     // Yes;
    }

    if (command === "END") {
        console.log("Failed!");
        console.log(startHeight);
    }
}

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"]);


