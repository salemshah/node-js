

const http = require("http");
const server = http.createServer((request, response) => {
  response.setHeader('content-Type', 'text/html')
  response.write("<h2>This is just for testing</h2>")
  response.end();
});

const PORT = 5000;
server.listen(PORT);