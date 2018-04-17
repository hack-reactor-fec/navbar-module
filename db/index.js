const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost/navbarModule';

const db = mongoose.connect(mongoUrl);

module.exports = db;
