const { Users } = require("../../model");

class UsersRepository {
  async UsersListRepository(params) {
    const response = await Users.find();

    if (response.length > 0)
      return {
        status: true,
        response: response,
        messages: "Successfully getting User list",
      };
    return {
      status: false,
      response: null,
      messages: "Unsuccessfully getting User list",
    };
  }

  async UsersPostRepository(params) {
    const response = await Users.create(params);
    if (response)
      return {
        status: true,
        response: response,
        messages: "Successfully add Users",
      };
    return {
      status: false,
      response: null,
      messages: "Unsuccessfully posting Users",
    };
  }

  async UsersGetOneRepository(params) {
    let whereClauce = {
      _id: params.params.id,
    };
    const response = await Users.findOne(whereClauce);

    if (response)
      return {
        status: true,
        response: response,
        messages: `Successfully getting Users id ${params.params.id} list`,
      };
    return {
      status: false,
      response: null,
      messages: `Unsuccessfully getting Users id ${params.params.id} list`,
    };
  }
}

module.exports = new UsersRepository();
