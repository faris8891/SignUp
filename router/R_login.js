const express = require("express");
const router = express.Router();
const login = require("../controller/C_login");
const detail = require("../controller/C_detail");
const del = require("../controller/C_delete");
const show = require("../controller/C_showProfile");
const updateDetails=require('../controller/C_updateForm')

const multer = require("multer");
const storage = require("../util/diskStorage");
const upload = multer({ storage: storage });

// ---------------Login page router----------------

router.get("/", login.get);
router.post("/user", login.post);
router.post("/detail", upload.single("photo"), detail.post);
router.post("/show", show.post);
router.post("/updateDetails", updateDetails.post);
router.post("/update", upload.single("photo"), updateDetails.update);
router.post("/delete", del.post);

(module.exports = router), multer;
