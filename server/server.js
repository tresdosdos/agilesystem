const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');


const app = express();
const port = 5000;

const dir = path.join(__dirname, 'public');

app.use(express.static(dir));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true })); ///нужное
app.use(bodyParser.json());


require('./middleware/login')(app);
require('./middleware/register')(app);
require('./middleware/avatar')(app);
require('./middleware/getProjects')(app);
require('./middleware/addProject')(app);
require('./middleware/joinProject')(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('client/public'));


app.listen(port, () => console.log(`Listening on port ${port}`));