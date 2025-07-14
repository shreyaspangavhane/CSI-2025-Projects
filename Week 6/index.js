const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

// GET a user by ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");
    res.json(user);
});

// POST a new user
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// put to update a user
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");

    user.name = req.body.name;
    res.json(user);
});

// Delete a user
app.delete("/users/:id", (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send("User not found");

    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
});

//server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});