const Router = require('@koa/router');
const CalendarEvent = require('./model');

const router = new Router({ prefix: '/calendarEvents' });

router.get('/', async (ctx) => {
  ctx.body = await CalendarEvent.findAll();
});

router.post('/', async (ctx) => {
  const { title, start, end } = ctx.request.body;

  ctx.body = await CalendarEvent.create({ title, start, end });
});

module.exports = router;
