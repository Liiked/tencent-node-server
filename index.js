const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.body = { name: '1111' };
});

app.listen(2333);
console.log('success')