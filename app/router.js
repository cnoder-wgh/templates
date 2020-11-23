'use strict';

module.exports = app => {
  app.router.resources('topics', '/api/v2/topics', 'topics');
  router.get('/', app.controller.home.index);
};
