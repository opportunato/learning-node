const http = require("http");
const moment = require("moment");
const url = require("url");

const parsetime = (time) => ({
  "hour": moment(time).hour(),
  "minute": moment(time).minute(),
  "second": moment(time).second(),
});

const unixtime = (time) => ({
  "unixtime": moment(time).valueOf(),
});

const server = http.createServer((req, res) => {
  if (req.method != 'GET')
    return res.end('send me a GET\n')

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const time = parsedUrl.query.iso;
  var result;

  if (pathname === "/api/parsetime") {
    result = parsetime(time);
  } else if (pathname === "/api/unixtime") {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }

});
server.listen(Number(process.argv[2]));
