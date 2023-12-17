const fs = require("fs");
const path = require("path");

// 获取绝对路径
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/private.key"));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"));

module.exports = {
  PRIVATE_KEY,
  PUBLIC_KEY
};
