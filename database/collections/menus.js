const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var menusSchema = new Schema({
<<<<<<< HEAD
  name : String,
  price : Number,
  property : String,
  description : Date,
  picture : String,
  idrestaurant : String
});
var menus = mongoose.model("orders", menusSchema);
module.exports = menus;
=======
  name: String,
  price : Number,
  property : Number,
  description : String,
  registerdate: Date,
  picture: String,
  idrestaurant: String
 });
var menus = mongoose.model("menus", menusSchema);
module.exports = menus;
>>>>>>> 3107f34d94dc1341bc062bed4e53aea5e5c12ae7
