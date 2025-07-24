# 🌟 Week 8 – Enhance Your Express.js Application

This project enhances a basic Express.js server with the following advanced features:

- ✅ File upload using `multer`
- ✅ Error handling middleware
- ✅ Integration with a third-party API (OpenWeatherMap)

---

## 📁 Project Structure

```
Week 8/
├── server.js         
├── .env              
├── uploads/          
├── package.json      
└── README.md         
```

---

## ⚙️ Setup & Installation

1. **Clone the repository or create the folder manually:**

```bash
git clone <repo-url>
cd Week 8
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file:**

```
WEATHER_API_KEY=your_openweathermap_api_key
PORT=5000
```

> Replace `your_openweathermap_api_key` with your actual API key from [OpenWeatherMap](https://openweathermap.org/api)

---

## ▶️ Running the Server

```bash
node server.js
```

Server will run on:
```
http://localhost:5000
```

---

## 📤 File Upload Route

**Endpoint:**
```
POST /upload
```

**Form-Data:**
- Key: `file`
- Value: (choose any file)

**Response:**
```json
{
  "message": "File uploaded",
  "file": {
    "filename": "timestamped-name.jpg",
    ...
  }
}
```

---

## 🌤 Weather API Route

**Endpoint:**
```
GET /weather/:city
```

**Example:**
```
GET /weather/pune
```

**Response:**
```json
{
  "city": "pune",
  "weather": { ... }
}
```

---

## ❌ Error Handling

If something goes wrong (e.g., missing file or API failure), the server responds with:

```json
{
  "error": "Detailed error message"
}
```

---

## 📦 Dependencies

- express
- multer
- axios
- dotenv

---
