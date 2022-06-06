function streamOfLetters(input) {
    let letter = input.shift();

    let isN = false;
    let isO = false;
    let isC = false;

    let printLine = '';
    let newWord = '';

    while (letter !== 'End') {
        let firstCondition = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
        let secondCondition = letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;

        if (firstCondition || secondCondition) {
            if (letter === 'n') {
                if (isN) {
                    newWord += letter;
                }
                isN = true;
            } else if (letter === 'c') {
                if (isC) {
                    newWord += letter;
                }
                isC = true;
            } else if (letter === 'o') {
                if (isO) {
                    newWord += letter;
                }
                isO = true;
            } else {
                newWord += letter;
            }

            if (isN && isC && isO) {
                printLine += `${newWord} `;
                newWord = '';
                isO = false;
                isC = false;
                isN = false;
            }
        }

        letter = input.shift();
    }

    console.log(printLine);
}

streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);