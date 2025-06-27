const express = require("express")
const app = express()
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();
})

app.get("/", (req, res) => {
    res.send("This is the Home")
})

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);

})