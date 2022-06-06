function fishland(input) {
    let skumriaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);

    let palamudPrice = skumriaPrice + (skumriaPrice * 60 / 100);
    palamudPrice *= kgPalamud;

    let safridPrice = cacaPrice + (cacaPrice * 80 / 100);
    safridPrice *= kgSafrid;

    let midiPrice = kgMidi * 7.50;

    let total = palamudPrice + safridPrice + midiPrice;

    console.log(total.toFixed(2));
}

fishland([6.90, 4.20, 1.5, 2.5, 1]);