
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (urlMap[path]) {
        return urlMap[path](req, res);
    } else {
        res.end('404 Not Found');
    }  

});

server.listen(3000,  () => console.log('Server running on http://localhost:3000/') );  

const users = (req, res) => {   res.end('USERS');   }
const posts = (req, res) => {   res.end('POSTS');   }   

const urlMap = {
    '/': (req,res) => res.end('HOME'),
    '/users': users,
    '/posts': posts
}

