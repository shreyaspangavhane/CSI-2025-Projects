# 📘 Simple RESTful API using Node.js and Express

This is a basic RESTful API built with **Node.js** and **Express.js** to demonstrate CRUD (Create, Read, Update, Delete) operations on a simple `User` resource.

---

## 🚀 Features

- `GET /users` → Get all users
- `GET /users/:id` → Get user by ID
- `POST /users` → Create a new user
- `PUT /users/:id` → Update existing user
- `DELETE /users/:id` → Delete a user

---


## 📂 Project Structure

```
simple-rest-api/
├── index.js        # Main API code
├── package.json    # Node dependencies
└── README.md       # Project info
```

---

## ⚙️ How to Run

1. **Clone the repo or create a new folder** and add the files.

2. **Install dependencies**:

```bash
npm install
```

3. **Run the server**:

```bash
node index.js
```

4. Server will start on:

```
http://localhost:3000
```

---

## 📬 API Endpoints

### ▶️ GET all users

```http
GET /users
```

### ▶️ GET user by ID

```http
GET /users/:id
```

Example:
```
GET /users/1
```

### ➕ POST new user

```http
POST /users
Content-Type: application/json

{
  "name": "Charlie"
}
```

### ♻️ PUT (update) user

```http
PUT /users/1
Content-Type: application/json

{
  "name": "Alice Updated"
}
```

### ❌ DELETE user

```http
DELETE /users/1
```

---
