const http = require("http");

const users = [
  { id: 1, name: "jan" },
  { id: 2, name: "khan" },
  { id: 3, name: "baba" },
];

const server = http.createServer((request, response) => {
  const { headers, url, method } = request;
  response.writeHead(200, {
    "Content-Type": "application/json",
  });
  response.end(
    JSON.stringify({
      success: true,
      url,
      method,
      headers,
      users,
    })
  );
});

const PORT = 5000;

server.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`));
