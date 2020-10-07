const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json",
  });
  response.end()
});

const PORT = 5000;

server.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`));
