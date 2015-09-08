var mongoose = require('mongoose');
mongoose.connect('mongodb://hassan:password@ds041613.mongolab.com:41613/flights000');
module.exports = mongoose.connection;