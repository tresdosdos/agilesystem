const Project = require('../../models/project').Project;

module.exports = function createProject(data, callback) {
  const userData = {
    projectName: 'Second project',
    description: 'second test project',
    TL: ['strelok'],
    Developers: ['Mario']
  };
  let project = new Project(userData);
  project.save(function (err, user) {

  });
};