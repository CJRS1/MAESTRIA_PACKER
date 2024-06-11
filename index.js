const http = require('http');
const server = http.createServer((req, res) => {
  res.end('<h1 style="color: green;"><i>Hello, World - Christian Reyes</i></h1>');
});
server.listen(3000);
