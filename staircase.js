const printStaircase = (num) => {
  const stringify = (n, char) => {
    if(n === 0) {

    }

    let ret = '';
    for(let i = 0; i <= n; i++) {
      ret += char;
    }

    return ret;
  }

  const ret = '';

  for(let i = 0; i < num; i++) {
    console.log(`${stringify(num - i - 2, ' ')}${stringify(i, '#')}`)
  }
};

printStaircase(4);
