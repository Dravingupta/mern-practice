const User = require('../models/User');
const bcrypt = require('bcrypt');


async function UserSignup(req , res) {
    try {
    
            const { username, email , password } = req.body;
            const hashedpass = bcrypt.hash(password, 10);
            const user = new User({ username, email, password : hashedpass });
            await user.save();
            res.status(200).json(user)
        }catch(err){
        console.log(err);   
   res.status(500).json({ message: err });
    }

};


