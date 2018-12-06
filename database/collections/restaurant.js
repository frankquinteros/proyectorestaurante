const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var restSchema = new Schema({
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
