const bodyParser = require('body-parser');
const checkUser = require('../db/checkUser');
const createUser = require('../db/createUser');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true })); ///нужное
    app.use(bodyParser.json());
    app.post('/register', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const {name, pass, rights} = req.body;
        checkUser(name, function (user, err) {
            if (err) {
                console.log(err);
                res.status(500).send();
            }
            if (user !== null) {
                res.status(409).send();
            }
            else{
                createUser({name: name, pass:pass, rights: rights},
                    function (user) {
                        res.send({userName: user.userName, rights: user.rights});
                    });
            }
        })
    });
};