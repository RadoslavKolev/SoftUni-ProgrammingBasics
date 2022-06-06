function pipesInPool(input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);

    let firstPipe = P1 * H;
    let secondPipe = P2 * H;

    let total = firstPipe + secondPipe;

    if (total <= V) {
        let percentFull = ((total * 100) / V).toFixed(2);
        let pipe1 = ((firstPipe * 100) / total).toFixed(2);
        let pipe2 = ((secondPipe * 100) / total).toFixed(2);
        console.log(`The pool is ${percentFull}% full. Pipe 1: ${pipe1}%. Pipe 2: ${pipe2}%.`);
    } else {
        let overflow = total - V;
        console.log(`For ${H} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }
}

pipesInPool([1000, 100, 120, 3]);
pipesInPool([100, 100, 100, 2.5]);