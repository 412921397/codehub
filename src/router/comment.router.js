const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const { create, reply } = require("../controller/comment.controller");

const commentRouter = new KoaRouter({ prefix: "/comment" });

// 增： 增加评论
commentRouter.post("/", verifyAuth, create);
// 增： huifupinglun
commentRouter.post("/reply", verifyAuth, reply);

module.exports = commentRouter;
