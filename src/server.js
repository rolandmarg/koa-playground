const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const passport = require('koa-passport');
const session = require('koa-session');

const authRoutes = require('./auth');
const calendarEventRoutes = require('./calendarEvent/routes');

const app = new Koa();

app.keys = [process.env.APP_SECRET];

app.use(logger());
app.use(helmet());
app.use(bodyParser());
app.use(cors());
app.use(session(app));
app.use(passport.initialize());

app.use(authRoutes.routes());
app.use(calendarEventRoutes.routes());

module.exports = app;
