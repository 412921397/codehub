const conection = require("../app/database");

class CommentService {
  async create(content, momentId, userId) {
    const statement = "INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?)";
    const [result] = await conection.execute(statement, [content, momentId, userId]);
    console.log(result, "result");
    return result;
  }

  async reply(content, momentId, commentId, userId) {
    const statement =
      "INSERT INTO comment (content, moment_id, comment_id, user_id) VALUES (?, ?, ?, ?)";
    const [result] = await conection.execute(statement, [content, momentId, commentId, userId]);
    return result;
  }
}

module.exports = new CommentService();
