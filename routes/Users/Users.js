const express = require("express");
const router = express.Router();
const { UsersController } = require("../../app/Users");

router.get("/list", UsersController.UsersListController); // get all users
router.post("/create", UsersController.UsersPostController);
router.get("/:id", UsersController.UsersGetOneController);
module.exports = router;
