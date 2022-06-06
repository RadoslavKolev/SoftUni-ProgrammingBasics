function countCosts(input) {
    let annualTax = Number(input[0]);

    let sneakers = annualTax - (annualTax * 40 / 100);
    let equipment = sneakers - (sneakers * 20 / 100);
    let ball = equipment * 1 / 4;
    let accessories = ball * 1 / 5;

    let totalPrice = annualTax + sneakers + equipment + ball + accessories;
    console.log(totalPrice);
}

countCosts(['365']);
countCosts(['550']);