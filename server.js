const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<h1>Hello </h1>");
        res.end();
    } else if (req.url === "/about") {
        res.write("<h1>About page </h1>");
        res.end();
    }
});

server.listen(5000, (error) => {
    if (error) throw error;
    console.log("server is running on port 5000");
});
