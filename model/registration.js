// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://superAdmin:admin123@localhost:27017/BackOffice', { autoIndex: false });


 
 
var userSchema = new Schema({
    firstName: { type: String, trim: true, required: true },
    last_name: {type: String, trim: true, required: true},
    cellPhoneNumber : {type: Number, unique: true},
    email: { type: String, unique: true, lowercase: true, trim: true },
    password: String
    });

 


var Registration = mongoose.model('Registration', userSchema);
module.exports = Registration;
