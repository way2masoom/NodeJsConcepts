// ====================================
// CREATE SERVER USING NODE.JS HTTP
// ====================================

const http = require("http");


// ====================================
// PORT
// ====================================

const port = 3000;


// ====================================
// CREATE SERVER
// ====================================

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);


    // --------------------------------
    // HOME PAGE
    // --------------------------------

    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to my Node.js server!");
    }


    // --------------------------------
    // ABOUT PAGE
    // --------------------------------

    else if (req.url === "/about" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("This is the About page.");
    }


    // --------------------------------
    // USERS API
    // --------------------------------

    else if (req.url === "/users" && req.method === "GET") {

        const users = [
            {
                id: 1,
                name: "MD Masoom"
            },
            {
                id: 2,
                name: "John"
            }
        ];

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users));
    }


    // --------------------------------
    // CONTACT PAGE
    // --------------------------------

    else if (req.url === "/contact" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Contact Us</h1>
            <p>Email: example@gmail.com</p>
            <p>Phone: 1234567890</p>
        `);
    }


    // --------------------------------
    // 404 - PAGE NOT FOUND
    // --------------------------------

    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }

});


// ====================================
// START SERVER
// ====================================

server.listen(port, () => {

    console.log(
        `Server is running on http://localhost:${port}`
    );

});