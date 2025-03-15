
const express = require('express');
const connectDB = require('./db/connect'); // Import DB connection
const tasks = require('./routes/tasks');
dotenv = require('dotenv').config();
const app = express();

// Connect to MongoDB
connectDB(); // 🔴 This line must be called!

// Middleware
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server is listening on port ${port}`));
