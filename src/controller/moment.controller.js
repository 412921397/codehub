const momentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    // 1.获取动态的内容
    const { content } = ctx.request.body;

    // 2.动态有谁发布
    const { id } = ctx.user;

    // 3.将动态相关的数据保存到数据库
    const result = await momentService.create(content, id);

    ctx.body = {
      code: 0,
      message: "创建评论成功~",
      data: result
    };
  }

  async list(ctx, next) {
    // 获取offset/size
    const { offset, size } = ctx.query;

    // 从数据库中查询动态列表
    const result = await momentService.queryList(offset, size);

    // 返回数据
    ctx.body = {
      code: 0,
      data: result
    };
  }

  async detail(ctx, next) {
    // 1.获取动态的id
    const { momentId } = ctx.params;

    // 2.根据id铲鲟动态详情
    const result = await momentService.queryById(momentId);

    // 返回数据
    ctx.body = {
      code: 0,
      message: "查询成功~",
      data: result[0]
    };
  }

  async remove(ctx, next) {
    // 1.获取删除动态的id
    const { momentId } = ctx.params;

    // 2.执行数据库操作
    const result = await momentService.remove(momentId);
    ctx.body = {
      code: 0,
      message: "删除动态成功~",
      data: result
    };
  }

  async update(ctx, next) {
    // 1.获取要修改的动态的id
    const { momentId } = ctx.params;
    // 2.修改的内容
    const { content } = ctx.request.body;
    // 3.执行数据库操作
    const result = await momentService.update(content, momentId);
    ctx.body = {
      code: 0,
      message: "修改动态成功~",
      data: result
    };
  }
}

module.exports = new MomentController();
