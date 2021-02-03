const anime = require('./anime');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/anime', anime);

};
