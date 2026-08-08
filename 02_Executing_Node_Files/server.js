const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/home') res.end("welcome to home page");
    else res.end('hello node world')
}); // 12.168.2:300 -> ip:port -> socket Address


server.listen(3000, () => {
    console.log("Server is running on http://localhsot:3000");
})