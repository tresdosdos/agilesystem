const bodyParser = require('body-parser');
const createUser = require('../db/createUser');
const comparePasswords = require('../db/comparePasswords');
const mongoose = require('../db');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true })); ///нужное
    app.use(bodyParser.json());
    app.post('/login', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const {name, pass} = req.body;
        //console.log(name+ " " + pass);
        //createUser({name: name, pass: pass});
        //console.log('Name: ' + req.body.name + ', Pass: ' + req.body.pass);
        comparePasswords({name: name, pass: pass}, function (err, isMatch, user) {
            if (err) res.status(404).send();
            else{
                if (isMatch){
                    res.send({userName: user.userName});
                }
                else{
                    res.status(403).send();
                }
            }
        });
    });
};