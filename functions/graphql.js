const { createLamdbaServer } = require('./bundle/server');

const server = createLamdbaServer();

exports.handler = server.createHandler({
  cors: {
    origin: '*',
  },
});
