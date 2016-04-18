const http = require("http");
const bl = require("bl");
const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding("utf8");

  response.pipe(bl((err, data) => {
    if (err)
      return console.error(err);

    const result = data.toString();
    console.log(result.length);
    console.log(result);
  }));
});
