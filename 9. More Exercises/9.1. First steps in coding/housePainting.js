function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let bothSideWalls = 2 * sideWall - 2 * window;

    let backWall = x * x;
    let entrance = 1.2 * 2;
    let frontAndBackWall = 2 * backWall - entrance;

    let totalGreenArea = bothSideWalls + frontAndBackWall;
    let greenDye = (totalGreenArea / 3.4).toFixed(2);

    // roof

    let bothRoofRectangles = 2 * (x * y);
    let bothRoofTriangles = 2 * (x * h / 2);

    let totalRedArea = bothRoofRectangles + bothRoofTriangles;
    let redDye = (totalRedArea / 4.3).toFixed(2);

    console.log(greenDye);
    console.log(redDye);
}

housePainting([6, 10, 5.2])