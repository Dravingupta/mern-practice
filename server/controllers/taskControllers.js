const Task = require('../models/Tasks');

async function getAllTasks(req, res) {  

    try{
        const userid = req.userid ;
        const tasks = await Task.findbyid({userid: userid}) ;
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({ message: 'Failed to fetch tasks' });
    }

  };
async function createTask (req , res) {
    try{
        const { title , status , detail }= req.body ;
        const userid = req.userid
        const task = new Task({title , status ,detail , userid});
        await task.save() ;
        res.status(200).json(task);
    } catch(error){
        console.log(error);   // 👈 THIS
  res.status(500).json({ message: 'error' });
    }
    
    
} ;
module.exports = {
    getAllTasks ,
    createTask

}; 
  