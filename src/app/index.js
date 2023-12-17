const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const registerRouters = require("../router");

// 创建app
const app = new Koa();

// app使用中间件
app.use(bodyParser());
registerRouters(app);

// 将app导出
module.exports = app;
