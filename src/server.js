const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  debug: { request: '*', log: '*' },
});

server.route({
  method: '*',
  path: '/{any*}',
  handler: () => Boom.notFound('Page Missing'),
});

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'hello world',
});

server.route({
  method: 'GET',
  path: '/hello/{name}',
  handler: (request) => `hello ${request.params.name}!`,
  options: {
    validate: {
      params: Joi.object({
        name: Joi.string().min(3).max(15),
      }),
    },
  },
});
exports.init = async () => {
  await server.initialize();

  return server;
};

exports.start = async () => {
  await server.start();

  return server;
};
