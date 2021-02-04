const animes = require('./animes');
const searches = require('./searches');
const actorAnime = require('./actorAnime');
const pageAnime = require('./pageAnime');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/animes', animes);
  app.use('/searches', searches);
  app.use('/actorAnime', actorAnime);
  app.use('/pageAnime', pageAnime)
};
