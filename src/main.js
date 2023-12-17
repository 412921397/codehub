// 导入app
const app = require("./app");
const { SERVER_PORT } = require("./config/server");
require("./utils/handle-error");

// 将app启动起来
app.listen(SERVER_PORT, () => {
  console.log("coderhub服务器启动成功~");
});
