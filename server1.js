const http = require("http");

const server = http.createServer((request, response) => {
  //console.log(request);
  const { url, headers, method } = request;
  //response.setHeader("Content-Type", "application/json");
  response.writeHead(200, {
    "Content-Type": "application/html",
    "X-Powered-By": "Node.js",
  });
  response.write("<h2>Hello</h2>");
  response.end(
    JSON.stringify({
      headers,
      method,
      url,
    })
  );
});

server.listen(1000);
