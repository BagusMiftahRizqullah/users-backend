const {
  UsersService: {
    UsersListService,
    UsersPostService,
    UsersGetOneService
  },
} = require("../../service");

class UsersController {
  async UsersListController(req, res) {
    const params = req;
    const salesman = await UsersListService(params);

    return res.json(salesman);
  }

  async UsersPostController(req, res) {
    const params = req.body;
    console.log("MYBODYS", params);
    const users = await UsersPostService(params);
    return res.json(users);
  }

  async UsersGetOneController(req, res) {
    const params = req;
    const users = await UsersGetOneService(params);

    return res.json(users);
  }
}

module.exports = new UsersController();
