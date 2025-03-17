
const express = require('express');
const connectDB = require('./db/connect'); // Import DB connection
const tasks = require('./routes/tasks');
dotenv = require('dotenv').config();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const app = express();

// Connect to MongoDB
connectDB(); // 🔴 This line must be called!

// Middleware 
app.use(express.static('./public'))
app.use(express.json());

 

app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server is listening on port ${port}`));
