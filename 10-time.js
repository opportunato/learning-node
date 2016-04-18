const net = require("net");
const moment = require("moment");

const server = net.createServer(socket => {
  const date = moment().format("YYYY-MM-DD HH:mm");
  socket.end(date + "\n");
});
server.listen(Number(process.argv[2]));
