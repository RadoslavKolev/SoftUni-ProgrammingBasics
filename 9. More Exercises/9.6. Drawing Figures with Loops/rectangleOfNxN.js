function rectangleOfNxN(n) {
  let text = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += '*';
    }
    text += '\n';
  }

  console.log(text);
}

rectangleOfNxN(2);
rectangleOfNxN(3);
rectangleOfNxN(4);