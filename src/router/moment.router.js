const KoaRouter = require("@koa/router");
const { create, list, detail, remove, update } = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/login.middleware");
const { verifyPermission } = require("../middleware/permission.middleware");

const momentRouter = new KoaRouter({ prefix: "/moment" });

// 1.增：新增动态
momentRouter.post("/", verifyAuth, create);
// 2.查：查询动态（列表/id)
momentRouter.get("/", list);
momentRouter.get("/:momentId", detail);
// 3.删： 删除动态
// momentRouter.delete("/:momentId", verifyAuth, verifyMomentPermission, remove);
// // 4.改: 修改动态
// // 验证: 登录的用户才能修改动态
// momentRouter.patch("/:momentId", verifyAuth, verifyMomentPermission, update);

// 3.删： 删除动态
momentRouter.delete("/:momentId", verifyAuth, verifyPermission, remove);

// 4.改: 修改动态
// 验证: 登录的用户才能修改动态
momentRouter.patch("/:momentId", verifyAuth, verifyPermission, update);

module.exports = momentRouter;
