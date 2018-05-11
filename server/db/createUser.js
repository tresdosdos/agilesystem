const User = require('../models/user').User;

module.exports = function createUser(data, callback) {
    const userData = {
        userName: data.name,
        password: data.pass
    };
    let user = new User(userData);
    user.save(callback);
};