const express = require('express');
const connectDB = require('./config/db');


const app = express();


connectDB();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('API is running...');
});
// server.js
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});