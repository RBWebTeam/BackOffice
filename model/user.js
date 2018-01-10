// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://superAdmin:admin123@localhost:27017/BackOffice', { autoIndex: false });
// create a schema
console.log(mongoose.connection.readyState);

// mongoose.connect('mongodb://superAdmin:admin123@localhost:27017/BackOffice', function(err, db) {
//   if (err) throw err;
//    db.collection("user").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//   });
//   console.log("Database created!");
//   db.close();
// });

 




var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
//userSchema.methods.dudify = function() {
//  this.name = this.name + '-dude'; 
//  return this.name;
//};
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// User.findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//   });


// make this available to our users in our Node applications
module.exports = User;