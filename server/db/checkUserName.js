const User = require('../models/user').User;

module.exports = function checkUserName(userName, callback) {
    User.findOne({userName: userName}, function (err, user) {
        if (err) callback(null, err);
        if (user === null) callback(null);
        else callback(user);
    })
};