const bodyParser = require('body-parser');
const comparePasswords = require('../db/user/comparePasswords');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true })); ///нужное
    app.use(bodyParser.json());
    app.post('/login', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const {name, pass} = req.body;
        comparePasswords({name: name, pass: pass}, function (err, isMatch, user) {
            if (err) res.status(404).send();
            else{
                if (isMatch){
                    console.log(user.img);
                    res.send({userName: user.userName, rights: user.rights, img: user.img});
                }
                else{
                    res.status(403).send();
                }
            }
        });
    });
};