const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoDb-config');

dotenv.config('.env');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('*', (req, res) => {
    res.status(404).send('Page not found');
})
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
    connectDB();
})