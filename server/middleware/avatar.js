const bodyParser = require('body-parser');
const path = require('path');
const checkUserName = require('../db/user/checkUserName');
const takeProjects = require('../db/project/takeProjects');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true })); ///нужное
    app.use(bodyParser.json());
    app.post('/avatar', function (req, res) {
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        const userName = req.body.userName;
        const sampleFile = req.files.photo;
        let name = req.files.photo.name;
        let imgPath = `./${name}`;
        name = userName + name;
        imgPath = `./${name}`;

        const staticPath = `..\\public\\${imgPath.slice(2, imgPath.length)}`;
        const currentPath = path.join(__dirname, staticPath);

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(currentPath, function(err) {
            if (err)
                return res.status(500).send(err);
            else {
                checkUserName(userName, function (user, err) {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                    }
                    user.img = imgPath;
                    user.save();
                    takeProjects((info) => {
                      res.send({img: imgPath, projects: info});
                    })
                });
            }
        });
    });

};