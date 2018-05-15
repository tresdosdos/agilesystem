const Project = require('../../models/project').Project;
const checkUserName = require('../user/checkUserName');

module.exports = function takeTL(TL, callback) {
  checkUserName(TL, function(TL, err){
    if (err) console.log(err);
    return ({
      userName: TL.userName,
      img: TL.img
    })
  })
};