function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let corridor = 100;

    let roomHeight = h * 100;
    roomHeight -= corridor;
    let tables = Math.floor(roomHeight / 70);

    let roomWidth = w * 100;
    let rows = Math.floor(roomWidth / 120);

    let totalPlaces = tables * rows - 3;

    console.log(totalPlaces);
}

trainingLab([15, 8.9]);