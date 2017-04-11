const input = '1 2 3\n1 2 3';

let [first, second] = input.split('\n')
                           .map(x => x.split(' ').map(Number));


const result = first.reduce((acc, curr, index) => {
  if(curr === second[index]) {
    return acc;
  }

  if(curr > second[index]) {
    acc[0]++;
    return acc;
  }

  if(second[index] > curr) {
    acc[1]++;
    return acc;
  }
}, [0, 0]);

console.log(result.join(' '));