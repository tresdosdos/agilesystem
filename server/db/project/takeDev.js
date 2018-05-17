const User = require('../../models/user').User;

module.exports = function takeDev(arr, callback){
  (async () =>{
    let teamDevs = [];
    const projectDevs = await arr.map((project) => project.Developers);
    for (let projectDev of projectDevs){
      const tempDev = [];
      for (let dev of projectDev){
        if (dev !== undefined){
          await User.findOne({userName: dev}).then((res) => {
            tempDev.push({userName: res.userName, img: res.img})
          })
        }
      }
      await teamDevs.push(tempDev);
    }
    await callback(teamDevs);
  })()
}