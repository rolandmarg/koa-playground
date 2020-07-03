const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const logger = require('koa-logger');

const calendarEventRoutes = require('./calendarEvent/controller');

const app = new Koa();

app.use(logger());
app.use(helmet());
app.use(bodyParser());

app.use(calendarEventRoutes.routes());

module.exports = app;
