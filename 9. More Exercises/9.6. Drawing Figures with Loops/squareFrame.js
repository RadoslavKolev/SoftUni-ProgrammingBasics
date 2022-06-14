function squareFrame(n) {
  let text = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        if (j === 0 || j === n - 1) {
          text += '+ ';
        } else {
          text += '- ';
        }
      } else {
        if (j === 0 || j === n - 1) {
          text += '| ';
        } else {
          text += '- ';
        }
      }
    }
    text += '\n';
  }
  
  console.log(text);
}

squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);