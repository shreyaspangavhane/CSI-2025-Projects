const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    const filename = url.searchParams.get('name');
    const content = url.searchParams.get('content') || '';

    if (!filename) {
        res.writeHead(400);
        res.end('Provide ?name=filename');
        return;
    }

    if (path === '/create') {
        fs.writeFile(filename, content, (err) => {
            if (err) return res.end('Error: Creating file..');
            res.end(`File '${filename}' created.`);
        });
    } else if (path === '/read') {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) return res.end('Error: reading file..');
            res.end(data);
        });
    } else if (path === '/delete') {
        fs.unlink(filename, (err) => {
            if (err) return res.end('Error: deleting file..');
            res.end(`File '${filename}' deleted.`);
        });
    } else {
        res.end('Use /create, /read, or /delete with ?name=filename');
    }
});

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000....');
});