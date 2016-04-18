const http = require("http");
const bl = require("bl");
const urls = process.argv.slice(2);

const results = [null, null, null];

urls.forEach((url, index) => {
  http.get(url, (response) => {
    response.setEncoding("utf8");

    response.pipe(bl((err, data) => {
      if (err) {
        results[index] = err;
        return;
      }

      results[index] = data.toString();

      if (results.every(result => !!result)) {
        results.forEach(result => console.log(result));
      }
    }));
  });
});
