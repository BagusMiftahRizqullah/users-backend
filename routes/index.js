const express = require("express");
const router = express.Router();

const Users = require("./Users");


/* GET home page. */
router.use("/users", Users);


module.exports = router;
