const bodyParser = require('body-parser');
const takeProjects = require('../db/project/takeProjects');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true })); ///нужное
  app.use(bodyParser.json());
  app.get('/projects', function (req, res) {
    takeProjects(function(info){
      res.send(info);
      }
    );
  });
};