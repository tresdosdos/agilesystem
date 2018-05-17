const Project = require('../../models/project').Project;

module.exports = function createProject(data, callback) {
  const userData = {
    projectName: data.projectName,
    description: data.projectDescr,
    TL: [],
    Developers: []
  };
  let project = new Project(userData);
  project.save(function (err, user) {

  });
};