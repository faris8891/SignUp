const express = require("express");
const router = express.Router();

// ---------------Home page router----------------

router.get("/", (req, res) => {
  res.render("../views/index");
});
module.exports = router;
