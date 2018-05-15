const User = require('../models/user').User;

module.exports = function (userData, cb) {
    User.findOne({userName: userData.name}).then(function (user) {
        user.comparePasswords(userData.pass, function (err, isMatch) {
            if (err) cb(err);
            cb(null, isMatch, user);
        })})
        .catch(function (err) {
            cb(err);
        });
};