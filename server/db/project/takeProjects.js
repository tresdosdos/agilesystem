const Project = require('../../models/project').Project;
const takeTL = require('./takeTL');
const takeDev = require('./takeDev');
const User = require('../../models/user').User;

module.exports = function takeProjects(callback) {
  (async () => {
    const projects = await Project.find();
    const projectNames = [];
    const projectDescriptions = [];
    let projectTLs = [];
    let projectDevs = [];
    const mainData = [];
    for (let project of projects){
      await projectNames.push(project.projectName)
      await projectDescriptions.push(project.description)
    }
    await takeTL(projects, function (info1) {
      projectTLs = info1;
      takeDev(projects, function (info2) {
        projectDevs = info2;
        for (let i = 0; i < projects.length; i++){
          const tempProject = {};
          tempProject.projectName = projectNames[i];
          tempProject.description = projectDescriptions[i];
          tempProject.TL = projectTLs[i];
          tempProject.developers = projectDevs[i];
          mainData.push(tempProject);
        }
        callback(mainData);
      })
    })
  })()
};