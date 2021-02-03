const animes = require('./animes');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/animes', animes);

};
