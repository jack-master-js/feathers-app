const { Service } = require("feathers-mongoose");

exports.Users = class Users extends Service {
  create(data, params) {
    const { email, password } = data;
    if (!email || !password) throw Error("缺少参数");

    return super.create(data, params);
  }
};
