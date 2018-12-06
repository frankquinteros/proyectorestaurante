const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var restSchema = new Schema({
<<<<<<< HEAD
  name : String,
  nit : String,
  proterty : String,
  street : String,
  phone : String,
  Log :String,
  Lat : String,
  registerdate : Date,
  picture : String
});
var restaurant = mongoose.model("restaurant", restSchema);
module.exports = restaurant;
=======
  name: String,
  nit : String,
  property : String,
  street : String,
  phone: String,
  Log: String,
  Lat: String,
  logo: String,
  registerdate: Date,
  picture: String
});
var restaurant = mongoose.model("restaurant", restSchema);
module.exports = restaurant;
>>>>>>> 3107f34d94dc1341bc062bed4e53aea5e5c12ae7
