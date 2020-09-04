const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end("<h1>Homepage<h1>")
    }
});

const port = process.env.port || 5000;

server.listen(port, () => console.log(`Server in running on port ${port}`));