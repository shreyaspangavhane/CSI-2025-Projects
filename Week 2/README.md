# 📁 Node.js Core File Manager

A simple file manager built using **Node.js core modules only** (`http`, `fs`, `url`) — no external packages.  
This tool allows you to **create**, **read**, and **delete** files via HTTP requests.

---

## 📌 Features

- 📄 Create a file with custom content
- 📖 Read the content of a file
- ❌ Delete a file
- 💯 Simple and lightweight — no third-party libraries

---

## 🧰 Packages/Modules Used

> Only built-in Node.js core modules are used — no installation needed.

| Module | Description |
|--------|-------------|
| `http` | To create the server and handle requests |
| `fs`   | To perform file system operations (create, read, delete) |
| `url`  | To parse incoming request URLs and query parameters |

---

## 🚀 How to use
###  Use your browser to access the following endpoints:

| Operation | Link to use in Browser |
|--------|-------------|
| `Create` | GET http://localhost:3000/create?name=test.txt&content=HelloCSI|
| `Read`   | GET http://localhost:3000/read?name=test.txt |
| `Delete`  | GET http://localhost:3000/delete?name=test.txt|

---