const lab = require('@hapi/lab').script();
const { expect } = require('@hapi/code');
const { init } = require('../src/server');

const { afterEach, beforeEach, describe, it } = lab;

exports.lab = lab;

describe('GET /', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/',
    });
    expect(res.statusCode).to.equal(200);
  });
});
