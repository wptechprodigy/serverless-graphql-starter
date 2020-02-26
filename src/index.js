const { createLocalServer } = require('./server');

const server = createLocalServer();

server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
