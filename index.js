const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    debug: { request: '*', log: '*' },
  });

  server.route({
    method: '*',
    path: '/{any*}',
    handler: () => '404 Error! Page not found',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'hello world',
  });

  await server.start();

  server.log('info', `server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

init();
