const animes = require('./animes');
const searches = require('./searches');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/animes', animes);
  app.use('/searches', searches)
};
