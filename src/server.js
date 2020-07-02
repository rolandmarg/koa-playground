const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('response-time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('response-time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  console.log(ctx.path);
  if (ctx.path === '/events') {
    ctx.body = {
      events: [
        {
          title: 'insider call',
          start: new Date(),
          end: new Date(),
        },
      ],
    };
  } else {
    await next();
  }
});

app.use(async (ctx) => {
  ctx.body = 'custom response';
});

module.exports = { start: (port) => app.listen(port) };
