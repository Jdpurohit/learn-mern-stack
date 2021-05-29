const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const books = require('./routes/api/books');

const app = express();

// connect db
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello Planet!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`server running on port ${port}`));