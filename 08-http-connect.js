const http = require("http");
const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding("utf8");
  var result = "";

  response.on("data", (response) => {
    result = result += response;
  });

  response.on("end", () => {
    console.log(result.length);
    console.log(result);
  });
});
