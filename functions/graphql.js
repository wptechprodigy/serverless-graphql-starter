const { createLamdbaServer } = require('../src/server');

const server = createLamdbaServer();

exports.handler = server.createHandler({
  cors: {
    origin: '*',
  },
});
