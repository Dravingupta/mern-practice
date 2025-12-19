const mongoose = require('mongoose');

async function connectDB() {
  try {
        await mongoose.connect('mongodb://127.0.0.1:27017/taskmanager');
        console.log('MongoDB connected successfully');
    } catch(error) { 
           console.error('MongoDB connection error:', error);
          
         };
};

module.exports = connectDB;