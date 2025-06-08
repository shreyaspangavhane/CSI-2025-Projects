const { error, log } = require("console");
const fs = require("fs");
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("index.html", (err, data) => {
        if (err)
            res.write("File not found")
        else
            res.write(data)
        res.end()
    })
});

server.listen(port, (error) => {
    if (error)
        console.log("Something getting wrong...");
    else
        console.log(`Listening on port ${port}...`);

})