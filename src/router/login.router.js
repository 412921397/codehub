const KoaRouter = require("@koa/router");
const { verifyLogin } = require("../middleware/login.middleware");
const { sign } = require("../controller/login.controller");

const loginRouter = new KoaRouter({ prefix: "/login" });

loginRouter.post("/", verifyLogin, sign);

module.exports = loginRouter;
