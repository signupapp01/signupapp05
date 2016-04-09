// designing a model for mongo
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String,
    password: String,
    fullname: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zipcode: String,
    phone: String,
});

// create the model and expose it to our app with module.exports
module.exports = mongoose.model('User', userSchema);
