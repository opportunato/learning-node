const fs = require("fs");
const path = require("path");

const applyFiltered = (dir, extension, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) return callback (err);
    list = list.filter(name => path.extname(name) === "." + extension);
    callback(null, list);
  });
}

module.exports = applyFiltered;
