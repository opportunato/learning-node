const applyFiltered =  require("./applyFiltered");

const dir = process.argv[2];
const extension = process.argv[3];

applyFiltered(dir, extension, (err, list) => {
  if (err) return console.log(err);
  list.forEach(name => console.log(name));
});
