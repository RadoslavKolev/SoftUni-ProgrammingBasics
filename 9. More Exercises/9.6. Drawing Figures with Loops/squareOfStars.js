function squareOfStars(n) {
  let text = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += '* ';
    }
    text += '\n';
  }

  console.log(text);
}

squareOfStars(2);
squareOfStars(3);
squareOfStars(4);