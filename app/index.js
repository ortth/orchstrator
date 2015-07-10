var react = require('koa-react-view');
var path = require('path');
var koa = require('koa');
var app = koa();

var viewpath = path.join(__dirname, 'views');
var assetspath = path.join(__dirname, 'public');

app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *() {
  this.body = 'Hello, Koa!';
});

react(app, {
  views: viewpath,
  babel: {
    only: [
      viewpath,
      assetspath
    ]
  }
});

app.listen(3000);
