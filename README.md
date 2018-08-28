<a href="https://communityinviter.com/apps/koa-js/koajs" rel="KoaJs Slack Community">![KoaJs Slack](https://img.shields.io/badge/Koa.Js-Slack%20Channel-Slack.svg?longCache=true&style=for-the-badge)</a>

# koa-exception

It's a koa middleware. Dependency on `koa@2`.

[Chinese Simplified](https://github.com/qixin1991/koa-exception/blob/master/README_CN.md)

# Why

When i use koa to dev my project that find everytime i have to
handler exception at the route. 

For example, a method maybe throws
MongoError or other errors called by route,so you always must handler it.

However, that's a not good way to do bussiness.

Use `koa-exception`, what you need do is that focus on your bussiness.

# Install

```
npm install koa-exception --save
```

# Usage

app.js

```
var app = require('koa')();
var KoaEx = require('koa-exception');

/** NOTE:
KoaEx must be used first before any other middleware, and then 
it will catch all of the exception throwed by route,dao and os.
*/       
app.use(KoaEx());

var port = 3000;
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
```



