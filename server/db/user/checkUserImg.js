const User = require('../../models/user').User;

module.exports = function checkUserImg(img, callback) {
    User.findOne({img: img}, function (err, user) {
        if (err) callback(null, err);
        if (user === null) callback(null);
        else callback(user);
    })
};