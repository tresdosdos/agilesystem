const User = require('../models/user').User;

module.exports = function createUser(data, callback) {
    let avatar;
    console.log(data.img);
    if (data.img === undefined) avatar = './standart_avatar.png';
    else avatar = data.img;
    const userData = {
        userName: data.name,
        password: data.pass,
        rights: data.rights,
        img: avatar
    };
    let user = new User(userData);
    user.save(function (err, user) {
        callback(user);
    });
};