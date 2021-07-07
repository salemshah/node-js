const http = require("http");
const users = [
  { id: 1, name: "jan" },
  { id: 2, name: "khan" },
  { id: 3, name: "baba" },
];

const server = http.createServer((request, response) => {
  const { method, url } = request

  let body = []
  request.on('data', chunk => {
    body.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    let status = 404;
    const responses = {
      success: false,
      data: null
    };

    if (method === "GET" && url === "/users") {
      status = 200;
      responses.success = true;
      responses.data = users
    } else if (method === "POST" && url === "/users") {
      const { id, name } = JSON.parse(body)
      if (!id || !name) {
        status = 400;
      } else {
        users.push({ id, name });
        status = 201;
        responses.success = true;
        responses.data = users;
        responses.countUsers = Object.keys(responses.data).length;
      }

    }

    response.writeHead(status, {
      "Content-Type": "application/json",
    });
    response.end(JSON.stringify(responses))

  })


});

const PORT = 5000;

server.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`));
