const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 3000,
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

exports.init = async () => {
  await server.initialize();

  return server;
};

exports.start = async () => {
  await server.start();

  return server;
};
