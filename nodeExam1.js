
const http = require('http');

let count=0;

const server = http.createServer((req, res) => {
    console.log((count += 1), req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello World ${count}\n`);
    }); 

server.listen(8000,  () => console.log('Server running on http://localhost:8000/') );          