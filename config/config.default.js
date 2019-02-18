'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.name = 'MixLab无界社区';

  config.description = 'Mix跨界社区';

  config.site_logo = '/public/images/mixlab_light.svg';

  config.site_icon = '/public/images/mixlab_icon_32.png';

  // debug 为 true 时，用于本地调试
  config.debug = true;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_5';

  config.host = 'http://mixlab.top';

  config.session_secret = 'mixlab_top_secret'; // 务必修改

  // add your config here
  config.middleware = [ 'locals', 'authUser', 'blockUser', 'errorPage', 'errorHandler' ];

  config.authUser = {
    enable: true,
    match: '/',
  };

  // 是否允许直接注册（否则只能走 github 的方式）
  config.allow_sign_up = false;

  // cdn host，如 http://mixlab.qiniudn.com
  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || ''; // 静态文件存储域名

  config.mini_assets = process.env.EGG_MINI_ASSETS || false;

  // 版块
  config.tabs = [
    [ 'ask', '问答', '有困难寻求帮助' ],
    [ 'share', '分享', '就是喜欢分享' ],
    [ 'ai_design', 'MLN000-人工设计智能', '探索AI+泛设计领域的应用' ],
    [ 'wx_dev', 'MLN001-微信小程序', '用小程序开发一些好玩的小项目' ],
    [ 'commercial_college', 'MLN002-奇点商学院', '讨论品牌/产品/运营思维' ],
    [ 'ai_js', 'MLN003-Tensorflow.JS', '用前端实现AI相关的应用' ],
    [ 'big_colors', 'MLN004-大数据x色彩图谱', '利用大数据提取色彩图谱关系，挖掘相关应用产品' ],
    [ 'smart_writer', 'MLN005-智能写手', '用技术来辅助运营，包括大数据、爬虫、脚本等' ],
    [ '30day_ai', 'MLN006-30天AI训练营', '爬虫技术栈，数据分析，算法入门，涉及javascript、python' ],
    [ 'computational_design', 'MLN007-计算设计', '研究设计师和实际物理结构之间的链接，包括数字建造、参数化设计等等技术' ],
    [ 'hackathon', 'MLN008-黑客马拉松', '用设计+技术，整合跨领域资源，创造具有想象力的科技产品' ],
    [ 'hack_talk', 'MLN009-黑客说', 'mixlab无界社区与Get知识引擎联合出品的一档以科技为主，探索科技·生活·商业的视频栏目，每期邀请跨领域的人士进行思维碰撞，以启发大家思考科技与生活的融合' ],
    [ 'i_brand_up', 'MLN010-万有品力', '写跨学科、跨行业人物专题' ],
    [ 'smart_city', 'MLN011-智能城市', '城市空间、城市交通、城市生活的智能化探索' ]];
  // ['job', '招聘']

  // RSS配置
  config.rss = {
    title: 'MixLab无界社区',
    link: 'http://mixlab.top',
    language: 'zh-cn',
    description: '机器思维、设计思维、商业思维跨领域社区',
    // 最多获取的RSS Item数量
    max_rss_items: 50,
  };

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  /* config.qn_access = {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    origin: 'http://your qiniu domain',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx',
  };
*/

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  config.upload = {
    path: path.join(__dirname, '../app/public/upload/'),
    url: '/public/upload/',
  };

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    layout: 'layout.html',
  };

  config.avatars_allow_hostname = [
    'avatars0.githubusercontent.com',
    'avatars1.githubusercontent.com',
    'avatars2.githubusercontent.com',
    'avatars.githubusercontent.com',
    'www.gravatar.com',
    'gravatar.com',
    'www.google-analytics.com',
  ];

  config.auth_cookie_name = 'egg_mixlab';
  config.admins = {
    
  };

  config.siteFile = {
    '/favicon.ico': '/public/images/mixlab_icon_32.png',
  };

  // database
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || '',
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500,
    },
  };

  // passport
  config.passportGithub = {
    key: process.env.EGG_PASSPORT_GITHUB_CLIENT_ID || '',
    secret: process.env.EGG_PASSPORT_GITHUB_CLIENT_SECRET || ''
  };

  config.passportLocal = {
    usernameField: 'name',
    passwordField: 'pass',
  };

  // 邮箱配置
  config.mail_opts = {
    host: 'smtp.163.com',
    port: 25,
    auth: {
      user: '-',
      pass: '-',
    },
    ignoreTLS: true,
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: process.env.EGG_ALINODE_APPID || '',
    secret: process.env.EGG_ALINODE_SECRET || '',
  };

  config.topic = {
    perDayPerUserLimitCount: 10,
  };

  config.list_topic_count = 20;

  // 每个 IP 每天可创建用户数
  config.create_user_per_ip = 1000;

  config.search = 'baidu'; // 'google', 'baidu', 'local'

  config.security = {
    csrf: {
      ignore: '/api/*/*',
    },
  };

  config.default_page = 1;
  config.default_limit = 20;

  config.cluster = {
    listen: {
      path: '',
      port: 1215,
      hostname: '0.0.0.0',
    },
  };


  return config;
};
