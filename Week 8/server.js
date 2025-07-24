const express = require('express');
const multer = require('multer');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// File Upload Config
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// File Upload Route
app.post('/upload', upload.single('file'), (req, res, next) => {
    if (!req.file) return next(new Error('No file uploaded'));
    res.json({ message: 'File uploaded', file: req.file });
});

// Weather API Route
app.get('/weather/:city', async(req, res, next) => {
    try {
        const city = req.params.city;
        const apiKey = process.env.WEATHER_API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        res.json({ city, weather: response.data });
    } catch (err) {
        next(err); // pass to error handler
    }
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));