const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main.controller");

router.post("/addCategory", mainController.addCategory);
router.post("/addForm", mainController.addForm);
router.post("/addUserRecord", mainController.addUserRecord);
router.post("/getUserCvs", mainController.getUserCvs);

module.exports = router;
