const express = require('express');
const bodyParser = require('body-parser');
const fetchUrl = require("fetch").fetchUrl;

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true })); ///нужное
app.use(bodyParser.json());

require('./middleware/login')(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('client/public'));


app.listen(port, () => console.log(`Listening on port ${port}`));