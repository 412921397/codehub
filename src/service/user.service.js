const conection = require("../app/database");

class userService {
  /** 创建用户 */
  async create(user) {
    // 1. 获取用户
    const { name, password } = user;

    // 2.拼接statement
    const statement = "INSERT INTO `user` (name, password) VALUES (?, ?);";

    // 3. 执行sql语句
    const [result] = await conection.execute(statement, [name, password]);
    return result;
  }

  // 查找用户
  async findUserByName(name) {
    const statement = "SELECT * FROM `user` WHERE name = ?;";
    const [values] = await conection.execute(statement, [name]);
    return values;
  }
}

module.exports = new userService();
