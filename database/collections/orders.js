const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var orderSchema = new Schema({
  idmenu : String,
  idcliente : String,
  street : String,
  lat : String,
  log : String,
  pagototal : Number,
  registerdate : Date
});
var order = mongoose.model("orders", orderSchema);
module.exports = order;

