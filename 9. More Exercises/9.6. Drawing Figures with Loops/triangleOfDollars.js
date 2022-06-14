function triangleOfDollars(n) {
  let text = '';
  let temp = '';

  for (let i = 0; i < n; i++) {
    temp += '$ ';
    text += temp + '\n';
  }

  console.log(text);
}

triangleOfDollars(2);
triangleOfDollars(3);
triangleOfDollars(4);
triangleOfDollars(5);