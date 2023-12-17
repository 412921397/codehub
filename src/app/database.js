const mysql = require("mysql2");

// 1.创建连接池
const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "aa789789",
  connectionLimit: 5
});

// 2.获取链接是否成功
connectionPool.getConnection((err, conection) => {
  // 1. 判断是否有错误信息
  if (err) return console.log("获取连接失败", err);

  // 2.获取conection，尝试和数据库建立连接
  conection.connect((err) => {
    if (err) {
      console.log("和数据库交互失败！", err);
    } else {
      console.log("数据库连接成功，可以操作数据库~");
    }
  });
});

// 3. 获取连接池中连接对象（promise)
const conection = connectionPool.promise();
module.exports = conection;
