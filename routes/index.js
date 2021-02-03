const consultants = require('./consultants');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/consultants', consultants);

};
