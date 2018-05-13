const User = require('../models/user').User;

module.exports = function createUser(data, callback) {
    const userData = {
        userName: data.name,
        password: data.pass,
        rights: data.rights
    };
    let user = new User(userData);
    user.save(function (err, user) {
        callback(user);
    });
};