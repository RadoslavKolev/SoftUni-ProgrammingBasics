function passwordGuess(input) {
    let password = String(input[0]);
    const phrase = 's3cr3t!P@ssw0rd';

    if(password === phrase) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

passwordGuess(['qwerty']);
passwordGuess(['s3cr3t!P@ssw0rd']);
passwordGuess(['s3cr3t!P@ss']);