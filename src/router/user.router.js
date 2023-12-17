const KoaRouter = require("@koa/router");
const userController = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");
const { verifyAuth } = require("../middleware/login.middleware");
const { test } = require("../controller/login.controller");

// 1.创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

// 2.定义路由的映射
// 2.1.用户注册接口
userRouter.post("/", verifyUser, handlePassword, userController.create);
userRouter.get("/", verifyAuth, test);

// 3.导出路由
module.exports = userRouter;
