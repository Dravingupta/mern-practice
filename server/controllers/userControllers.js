const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// require('dotenv').config();



async function UserSignup(req, res) {
    try {

        const { username, email, password } = req.body;
        const hashedpass = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedpass });
        await user.save();
        res.status(200).json({
            massage: "user created", user
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }

};

async function UserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ "email": email })
        if (!user) {
           return res.status(500).json({ "massage": "invalid credential" })
            console.log(user)
        }

        const ismatch = await  bcrypt.compare(password, user.password) 
        if(!ismatch) {
                console.log(user)
               return res.status(401).json({ "massage": "invalid credential" })  
            };
        
        const token =  jwt.sign({ userid: user._id } , "secret" , {expiresIn:"1d"}) 
        res.cookie(
            "token" , token , {
                httpOnly: true ,
                sameSite : "strict" ,
                maxAge : 24 * 60 * 60 * 1000
            }
        );
        res.status(200).json({
            "message" : "User Loged in" ,
           
        })   



    } catch (error) {
        console.log(error)

    res.status(500).json({"massage" : "internal error"})

    }

}

async function UserLogout(req , res ){
    res.clearCookie(
        "token" ,  {
         httpOnly: true,
        sameSite: "strict"
        }
    );
    res.json({
        "message" : "loged out"
    })
}

module.exports = { UserLogin, UserSignup , UserLogout }


