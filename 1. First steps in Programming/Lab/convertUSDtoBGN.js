function convertUSDtoBGN(input) {
    const dollar = 1.79549;
    let usd = Number(input[0]);
    let leva = usd * dollar;

    console.log(leva);
}

convertUSDtoBGN(['22']);
convertUSDtoBGN(['100']);
convertUSDtoBGN(['12.5']);