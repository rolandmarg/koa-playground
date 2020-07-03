require('dotenv').config();

const koa = require('./server');
const { sequelize } = require('./db');

async function bootstrap() {
  await sequelize.sync();

  koa.listen(4000);
}

bootstrap();

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});
