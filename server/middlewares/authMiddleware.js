const jwt = require("jsonwebtoken");

const auth = async (req , res , next) => {

    try{
    const token = req.cookies.token ;
    if(!token){
        return res.status(401).json({"message":"not authentication"});
    }
    const decoded =  jwt.verify(token , "secret")
    req.userid = decoded.userid ;
    next();} catch(error){
        console.log(error);
        res.status(400).json({
            "massage":"internal error"
        })
    }

}

module.exports = auth ;