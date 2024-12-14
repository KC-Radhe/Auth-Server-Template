const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/mongoDb-config');
const apiRoutes = require('./routes/auth-route');

dotenv.config('.env');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRoutes);
app.use('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
    connectDB();
})