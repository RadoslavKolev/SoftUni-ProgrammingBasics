function vegetableMarket(input) {
    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegetableKgs = Number(input[2]);
    let fruitKgs = Number(input[3]);

    let vegetables = vegetableKgs * vegetablePrice;
    let fruits = fruitKgs * fruitPrice;

    let total = (vegetables + fruits) / 1.94;

    console.log(total.toFixed(2));
}

vegetableMarket([0.194, 19.4, 10, 10]);