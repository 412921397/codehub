const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../config/screct");

class LoginController {
  sign(ctx, next) {
    // 1.获取用户信息
    const { id, name } = ctx.user;

    // 2.颁发令牌token
    let token = "";
    try {
      token = jwt.sign({ id, name }, PRIVATE_KEY, {
        expiresIn: 24 * 60 * 60 * 15,
        algorithm: "RS256"
      });
    } catch (err) {
      console.log(err);
    }

    // 3.返回用户信息
    ctx.body = { code: 0, data: { id, name, token } };
  }

  test(ctx, next) {
    ctx.body = `验证身份通过~`;
  }
}

module.exports = new LoginController();
