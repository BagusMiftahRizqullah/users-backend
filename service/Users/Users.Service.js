const UserRepository = require("../../repository/Users/Users.Repository");

class UsersService {
  async UsersListService(params) {
    
    const Users = await UserRepository.UsersListRepository(params);
    console.log("exploresNya", Users);
    if (Users.status === false) return Users;

    return Users;
  }

  async UsersPostService(params) {
    const creataeUser = await UserRepository.UsersPostRepository(params);
    if (creataeUser.status === false) return creataeUser;

    return creataeUser;
  }

  async UsersGetOneService(params) {
    const users = await UserRepository.UsersGetOneRepository(params);

    if (users.status === false) return users;

    return users;
  }
}


module.exports = new UsersService();
