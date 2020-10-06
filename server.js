const http = require("http");

const users = [
  { id: 1, name: "jan" },
  { id: 2, name: "khan" },
  { id: 3, name: "baba" },
];

const server = http.createServer((request, response) => {
  const { headers, url, method } = request;
  //console.log("Headers ===>", headers, "Url===>", url, "Method ===> ", method);
  if (method === "POST" || method === "GET") {
    //response.statusCode = 404;
    //response.setHeader("content-Type", "application/json");
    //response.setHeader('content-Type', 'text/html')
    //response.setHeader("X-Powered-By", "Node.js");
    //response.write("<h2>This is just for testing</h2>")
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
  }

  //request.headers.authorization;// get data form headers request
  let body = [];

  request
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });
  response.end(
    JSON.stringify({
      success: true,
      url,
      method,
      headers,
      users,
      auto: request.headers.authorization,
    })
  );
});

const PORT = 5000;

server.listen(PORT, console.log(`Server running on port ${PORT}`));
