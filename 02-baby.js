const sum = process.argv.slice(2).reduce((acc, el) => {
  return acc + Number(el);
}, 0);

console.log(sum);
