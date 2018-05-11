const User = require('../models/user').User;

module.exports = function createUser(data, callback) {
    const userData = {
        username: data.name,
        password: data.pass
    };
    let user = new User(userData);
    user.save(callback);
};