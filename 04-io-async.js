const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) throw err;

  const lines = data.split("\n").length - 1;
  console.log(lines);
});
