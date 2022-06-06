function oldBooks(input) {
    let favoriteBook = input[0];
    let isFound = false;
    let i = 1;

    while (input[i] !== 'No More Books') {
        if(input[i] === favoriteBook) {
            isFound = true;
            break;
        }
        i++;        
    }

    if (isFound === false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${i - 1} books.`);
    } else {
        console.log(`You checked ${i - 1} books and found it.`);
    }
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);