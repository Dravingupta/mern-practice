const express = require("express");
const router = express.Router();
const { UserLogin, UserSignup , UserLogout } = require("../controllers/userControllers")
const auth = require("../middlewares/authMiddleware")

router.post("/login", UserLogin );
router.post("/signup", UserSignup );
router.get("/logout", UserLogout );

module.exports = router;
