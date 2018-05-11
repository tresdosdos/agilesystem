const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/myproject', {
    promiseLibrary: global.Promise
});

module.exports = mongoose;