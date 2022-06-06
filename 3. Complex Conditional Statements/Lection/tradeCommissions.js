function tradeCommissions(input) {
    let city = String(input[0]);
    let sales = Number(input[1]);

    let commission = 0.0;

    switch(city) {
        case 'Sofia':
            if (sales >= 0 && sales <= 500) {
                commission = sales * 5 / 100;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 7 / 100;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 8 / 100;
            } else if (sales > 10000) {
                commission = sales * 12 / 100;
            } else {
                console.log('error');
                return;
            }
            break;
        case 'Varna':
            if (sales >= 0 && sales <= 500) {
                commission = sales * 4.5 / 100;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 7.5 / 100;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 10 / 100;
            } else if (sales > 10000) {
                commission = sales * 13 / 100;
            } else {
                console.log('error');
                return;
            }
            break;
        case 'Plovdiv':
            if (sales >= 0 && sales <= 500) {
                commission = sales * 5.5 / 100;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 8 / 100;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 12 / 100;
            } else if (sales > 10000) {
                commission = sales * 14.5 / 100;
            } else {
                console.log('error');
                return;
            }
            break;
        default:
            console.log('error');
            return;
    }

    console.log(commission.toFixed(2));
}

tradeCommissions(['Sofia', '1500']);
tradeCommissions(['Plovdiv', '499.99']);
tradeCommissions(['Varna', '3874.50']);
tradeCommissions(['Kaspichan', '-50']);