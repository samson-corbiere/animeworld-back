const animes = require('./animes');
const searches = require('./searches');
const actorAnime = require('./actorAnime')

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/animes', animes);
  app.use('/searches', searches);
  app.use('/actorAnime', actorAnime);
};
