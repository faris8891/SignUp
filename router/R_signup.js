const express = require("express");
const router = express.Router();
const signup = require("../controller/C_signup");

// ---------------SignUp page router----------------

router.get("/", signup.get);
router.post("/user", signup.post);

module.exports = router;
