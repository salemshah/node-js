

// in postman you must insert some thing in (body) tab and select (raw)
// example { "name":"ahmad", "age": 25 }
// and see the result in terminal

const http = require('http')

const server = http.createServer((request, response) => {

    response.writeHead(200, {
        "Content-Type": "application/json"
    });

    let body = []

    request.on('data', chunk => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        // see the result in terminal
        console.log(body);
    })
    response.end()
});

server.listen(5000)