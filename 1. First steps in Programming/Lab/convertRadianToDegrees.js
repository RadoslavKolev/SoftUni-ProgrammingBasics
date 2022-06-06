function convertRadianToDegrees(input) {
    let radian = Number(input[0]);
    let degrees = radian * 180 / Math.PI;

    console.log(degrees);
}

convertRadianToDegrees(['3.1416']);
convertRadianToDegrees(['6.2832']);