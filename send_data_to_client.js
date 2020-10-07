const http = require("http");

const users = [
    { id: 1, name: "jan" },
    { id: 2, name: "khan" },
    { id: 3, name: "baba" },
];

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "application/json",
    });
    response.end(
        JSON.stringify({
            users,
        })
    );
});

const PORT = 5000;

server.listen(PORT, console.log(`Server running on port: http://localhost:${PORT}`));