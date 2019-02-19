# mix社区
mix社区是跨界社区，融合机器思维/设计思维/商业思维。
mix社区是mixlab的线上社区，mixlab是一所面向未来的实验室。


## 我们的愿景是：
让每个人无限可能
Enable Infinite Possibilities for Everyone!

此版本基于egg的nodejs社区二次开发而来。


## QuickStart
如何开始：
<!-- add docs here for user -->


### Environment Dependencies
数据存储在mongodb，并使用redis做缓存。

- [redis](https://redis.io/)
- [mongodb](https://www.mongodb.com/)


#### macOS Install
mac系统安装步骤：

```bash
$ brew install redis mongodb
$ brew services start redis
$ brew services start mongodb
```

其他系统安装方式请参考redis、mongodb官方文档。


#### github账号
由于登录采用的是github账号，所以需要去github申请下 Client ID 跟 Client Secret，路径：

```bash
Settings ---> Developer settings
```

然后填写到：
```js
//config.default.js

config.passportGithub = {
    key: '',
    secret:''
  };

```


### Development
先从mixlab官方仓库下载项目

```bash
$ git clone https://github.com/MixLab-Tech/mix-community.git
```

然后用npm或者yarn安装依赖包
```bash
$ npm i
```

开发项目
```bash
$ npm run dev
```

浏览器打开地址：
```bash
$ open http://localhost:1215/
```


### Deploy
部署到线上服务器

修改文件：
```js 
// {app_root}/config/config.prod.js
```

内容修改为：
```js
exports.mini_assets = true;

exports.alinode = {
  // 从 `Node.js 性能平台` 获取对应的接入参数
  appid: process.env.EGG_ALINODE_APPID || '',
  secret: process.env.EGG_ALINODE_SECRET || '',
};
```

运行：
```bash
$ npm i --production
$ npm run assets
$ npm start
$ npm stop
```


### npm scripts
其他命令，包括代码检查、单元测试等。

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.



### Tutorials
开发过程中可以在mix社区求助，或者参考：
[egg]: https://eggjs.org


### 注意

##### 1 github账号的邮箱问题
通过github登录，github账号的邮箱需要设置，如果未设置，会显示与已有用户重复，无法登录(此问题已经修复）。
![tips](/tutorial/images/github_email.png)


目前已发现qq邮箱不支持github账号认证，建议改用163邮箱或其他.

认证邮件如下：

![tips](/tutorial/images/verify_email.png)



##### 2 nginx代理
如果是通过nginx代理来部署服务，记得在nginx设置里把真实IP设置上，否则github的回调地址会出错，注意调试authorize请求.
一个简单的示例：

```js
//mixlab.conf

server {
  server_name www.mixlab.top
  listen 80;
 
  location / {
    proxy_pass http://127.0.0.1:1215;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}

```