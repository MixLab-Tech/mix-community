'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/service/mail.test.js', () => {
  describe('sendActiveMail', () => {
    it('should ok', async () => {
      const ctx = app.mockContext();
      await ctx.service.mail.sendActiveMail('389570357@qq.com', 'token', 'shadow');
    });
  });

  describe('sendResetPassMail', function() {
    it('should ok', async () => {
      const ctx = app.mockContext();
      await ctx.service.mail.sendResetPassMail('389570357@qq.com', 'token', 'shadow');
    });
  });
});
