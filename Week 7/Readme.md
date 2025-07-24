# 🔐 Simple JWT Authentication API

A very basic Node.js REST API demonstrating how to implement JWT-based authentication using `express` and `jsonwebtoken`.

---

## 🚀 Features

- Login route that returns a JWT token
- Protected route only accessible with valid JWT
- Middleware to verify and decode tokens

---

## 📁 Project Structure

```
.
├── server.js       # Main server file
├── .env            # Secret key for JWT
└── package.json
```

---


## ⚙️ Environment Variables

Create a `.env` file in the root:

```
JWT_SECRET=jwtkey
```

---

## ▶️ Running the App

```bash
node server.js
```

Server will start on port `5000` by default.

---

## 📡 API Endpoints

### ✅ Login (Generate Token)
```
POST /login
Content-Type: application/json

{
  "username": "shreyas",
  "password": "123456"
}
```
Returns:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

---

### 🔒 Protected Route
```
GET /protected
Authorization: Bearer <your_token>
```

Returns:
```json
{
  "message": "This is a protected route",
  "userId": 1
}
```

---

## 🧱 Dependencies

- express
- jsonwebtoken
- dotenv

Install with:
```bash
npm install express jsonwebtoken dotenv
```

---
