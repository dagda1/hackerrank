const arr = [1, 2, 3, 4, 5].sort();

const result = arr.reduce((acc, curr, index) => {
  const clone = arr.slice(0);

  clone.splice(index, 1);

  const r = clone.reduce((total, c) => total + c);

  if(acc.min === undefined && acc.max === undefined) {
    acc.min = acc.max = r;
    return acc;
  }

  if(r < acc.min) {
    acc.min = r;
  }

  if(r > acc.max) {
    acc.max = r;
  }
  return acc;
}, {
  min: undefined,
  max: undefined
});

console.log(`${result.min} ${result.max}`);