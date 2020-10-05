const http = require('http');

const data = [
    {id: 1, name: "jan"},
    {id: 2, name: "khan"},
    {id: 3, name: "baba"},
]

const server = http.createServer((request, response) => {
    const {headers, url, method} = request
    //console.log("Headers ===>", headers, "Url===>", url, "Method ===> ", method);
    if (method === "POST" || method === "GET") {
        response.setHeader('content-Type', 'application/json')
        response.setHeader('X-Powered-By', 'Node.js')
        //response.write("<h2>This is just for testing</h2>")
    }
    response.end(JSON.stringify({
        success: true,
        data: data,
    }));
});

const PORT = 5000;

server.listen(PORT, console.log(`Server running on port ${PORT}`))