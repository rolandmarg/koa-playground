const lab = require('@hapi/lab').script();
const { expect } = require('@hapi/code');
const { init } = require('../src/server');

const { afterEach, beforeEach, describe, it } = lab;

exports.lab = lab;

describe('GET', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/',
    });
    expect(res.statusCode).to.equal(200);
  });

  it('responds with 404 not found', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/asdqwe',
    });
    expect(res.statusCode).to.equal(404);
  });

  it('responds with 400 bad request', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/hello/radsadsadasdadasdasdasd',
    });
    expect(res.statusCode).to.equal(400);
  });

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/hello/roma',
    });
    expect(res.statusCode).to.equal(200);
  });
});
