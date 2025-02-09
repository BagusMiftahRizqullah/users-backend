const express = require("express");
const router = express.Router();
const Users = require("./Users");

router.use("/", Users);
module.exports = router;
