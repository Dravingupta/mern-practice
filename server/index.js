const express = require('express');
const app = express();
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');


connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
});

app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.use('/tasks' , taskRoutes);  
app.use('/auth' , taskRoutes);  




