function countLitres(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let aquariumVolume = length * width * height;
    let volumeInLitres = aquariumVolume / 1000;
    let occupiedSpace = percentage / 100;

    let litresNeeded = volumeInLitres * (1 - occupiedSpace);

    console.log(litresNeeded);
}

countLitres(['85', '75', '47', '17']);
countLitres(['105', '77', '89', '18.5']);