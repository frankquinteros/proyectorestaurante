const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
<<<<<<< HEAD
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
=======
var ordersSchema = new Schema({
  idmenu: String,
  idcliente : String,
  street: String,
  lat: String,
  Log: String,
  pagototal: Number,
  registerdate: Date
});
var orders = mongoose.model("orders", ordersSchema);
module.exports = orders;
>>>>>>> 3107f34d94dc1341bc062bed4e53aea5e5c12ae7
