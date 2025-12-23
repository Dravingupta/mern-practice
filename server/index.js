const express = require('express');
const app = express();
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const UserRoutes = require("./routes/userRoutes")
const cors = require('cors');
const cookieParser = require('cookie-parser');
const auth = require("./middlewares/authMiddleware")
const User = require("./models/User")


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

app.use(cors({
    origin: "http://localhost:5173", // React app
    credentials: true                // 🔥 allow cookies
}));
app.use(cookieParser());
app.use(express.json());


app.use('/tasks' , taskRoutes);  
app.use('/auth' , UserRoutes); 
app.get("/me", auth , (req , res)=>{

    res.json({
        "message": "yes",
        "id":req.userid
    })
} ) 




