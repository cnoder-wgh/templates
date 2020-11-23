'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = 'hello nori';
  }
}

module.exports = HomeController;
