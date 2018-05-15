const Project = require('../../models/project').Project;
const takeTL = require('./takeTL');

module.exports = function takeProject(callback) {
  const teamLeads = [];
  const Developers = [];

  /*Project.find(function(err, projects){
    projects.forEach((project) => {
      project.Developers.forEach((dev) => {
        takeTL(dev, function (info) {
          Developers.push(info);
        });
      })
    })
  });
  callback({TL: teamLeads,
  dev: Developers})
  */
  /*(async() => {
    await Project.find(function(err, projects){
      projects.forEach((project) => {
        project.TL.forEach((teamL) => {
          takeTL(teamL, function (info) {
            teamLeads.push(info);
          });
        })
      })
    });
    await console.log(teamLeads);
  })()*/
  (async () => {
    const projects = await Project.find();
    const TLs = await projects.map((teamL) => teamL.TL);
    await TLs.forEach((TL) => {
      takeTL(TL, function (info) {
        teamLeads.push(info);
      })
    })
    const teamLeads = await TLs.map((TL) => {
      const temp = takeTL(TL);
      return temp;
    })
    await console.log(teamLeads);
  })();
};