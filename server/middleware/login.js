const bodyParser = require('body-parser');
const User = require('../models/user');
const createUser = require('../db/createUser');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true })); ///нужное
    app.use(bodyParser.json());
    app.post('/login', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const userName = req.body.name;
        const userPass = req.body.pass;
        const {name, pass} = req.body;
        console.log(userName+ " " + userPass);
        createUser({name: name, pass: pass});
        console.log('Name: ' + req.body.name + ', Pass: ' + req.body.pass);
    });
};