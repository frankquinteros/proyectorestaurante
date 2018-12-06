const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var menusSchema = new Schema({
  name : String,
  price : Number,
  property : String,
  description : Date,
  picture : String,
  idrestaurant : String
});
var menus = mongoose.model("orders", menusSchema);
module.exports = menus;
