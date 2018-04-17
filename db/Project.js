const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const projectSchema = new mongoose.Schema({
  id: Number,
  faq: Number,
  updates: Number,
  comments: Number,
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

