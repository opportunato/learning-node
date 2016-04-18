const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(dir, (err, list) => {
  if (err) return console.log(err);
  list
    .filter(name => path.extname(name) === extension)
    .forEach(name => console.log(name));
});
