function characterSequence(input) {
    let word = input[0];
    for (let i = 0; i < word.length; i++) {
        console.log(word.charAt(i));
    }
}

characterSequence(['softuni']);
characterSequence(['ice cream']);
