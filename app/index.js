var react = require('koa-react-view');
var staticCache = require('koa-static-cache');
var path = require('path');
var koa = require('koa');
var app = koa();

var viewpath = path.join(__dirname, 'views');
var assetspath = path.join(__dirname, 'assets');

react(app, {
  views: viewpath,
  babel: {
    only: [
      viewpath,
      assetspath
    ]
  }
});

app.use(staticCache(assetspath));

app.use(function *() {
  this.render('index', {
    title: 'List',
    list: [
      'Hello Koa!',
      'Hello React!'
    ]
  });
});

app.listen(3000);
console.log('Go to http://localhost:3000');
