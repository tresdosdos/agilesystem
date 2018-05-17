const bodyParser = require('body-parser');
const Project = require('../models/project').Project;
const checkUserName = require('../db/user/checkUserName');
const takeProjects = require('../db/project/takeProjects');

module.exports = function joinProject(app) {
  app.use(bodyParser.urlencoded({ extended: true })); ///нужное
  app.use(bodyParser.json());
  app.post('/joinProject', function (req, res) {
    const { projectName, userName, rights} = req.body;
    let userAvatar = '';
    (async () => {
      await checkUserName(userName,(user) =>{
        userAvatar = user.img;
      })
      await Project.findOne({projectName: projectName}).then(function (project) {
        if (rights === 'Developer'){
          if (project.Developers.indexOf(userName) === -1) project.Developers.push(userName)
          else{
            res.status(403).send();
            return;
          }
        }
        else{
          if (project.TL.indexOf(userName) === -1) project.TL.push(userName)
          else {
            res.status(403).send();
            return;
          }
        }
        project.save(function(err, project){
          takeProjects(function(info){
            console.log(info);
            res.send(info);
          })
        });
      })})()
  });
};