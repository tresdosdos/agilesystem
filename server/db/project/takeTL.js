const User = require('../../models/user').User;

module.exports = function takeTL(arr, callback){
  (async () =>{
    let teamLeads = [];
    const projectTLs = await arr.map((project) => project.TL);
    for (let projectTL of projectTLs){
      const tempTL = [];
      for (let tl of projectTL){
        if (tl !== undefined){
          await User.findOne({userName: tl}).then((res) => {
            tempTL.push({userName: res.userName, img: res.img})
          })
        }
      }
      await teamLeads.push(tempTL);
    }
    await callback(teamLeads);
  })()
}