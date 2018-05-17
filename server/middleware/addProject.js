const bodyParser = require('body-parser');
const takeProjects = require('../db/project/takeProjects');
const createProject = require('../db/project/createProject');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true })); ///нужное
  app.use(bodyParser.json());
  app.post('/addProject', function (req, res) {
    if (!req.body) {
      console.log('400');
      return res.sendStatus(400);
    }
    createProject({
      projectName: req.body.projectName,
      projectDescr: req.body.projectDescr
    });
    takeProjects(function(info){
      res.send(info);
    });
  });
};