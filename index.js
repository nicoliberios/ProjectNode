const http = require('http');

const hostname = '0.0.0.0'; 
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Hello! My name is NICOLAS LIBERIO World, This is a project to Node\n');
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
