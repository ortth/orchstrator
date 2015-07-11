'use strict';

var react = require('koa-react-view');
var staticCache = require('koa-static-cache');
var router = require('koa-router')();
var path = require('path');
var koa = require('koa');
var app = koa();
require('koa-trace')(app);
app.debug();

var viewpath = path.join(__dirname, 'views');
var assetspath = path.join(__dirname, '../build');

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

// app.use(function *() {
//   this.render('index', {title: 'Orchstator'});
// });

router.get('/', function *(next) {
  this.render('index', {title: 'Orchstator'});
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log('Go to http://localhost:3000');
