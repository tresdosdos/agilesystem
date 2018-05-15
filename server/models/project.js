const mongoose = require('../db');

const schema = mongoose.Schema(
  {
    projectName:{
      type: String,
      unique: true,
      required: true
    },
    description:{
      type: String,
      unique: false,
      required: true
    },
    TL:{
      type: Array,
      unique: false,
      required: false
    },
    Developers:{
      type: Array,
      unique: false,
      required: false
    }
  }
);

exports.Project = mongoose.model('Project', schema);