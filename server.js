const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db')
const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Define a sample route
app.get('/health', async (req, res) => {
    try {
        res.send('Server Health is good');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
