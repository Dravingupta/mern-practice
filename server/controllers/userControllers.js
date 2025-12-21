const User = require('../models/User');
const bcrypt = require('bcrypt');


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

    } catch (error) {

    }

}

module.exports = {UserLogin , UserSignup}


