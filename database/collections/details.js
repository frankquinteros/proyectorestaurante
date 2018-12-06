const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var detailSchema = new Schema({
<<<<<<< HEAD
  idmenu : String,
  idorder : String,
    cantidad : Number
});
var detail = mongoose.model("detail", detailSchema);
module.exports = detail;
=======
  idmenu: String,
  idorder: String,
  cantidad: Number
});
var detail = mongoose.model("detail", detailSchema);
module.exports = detail;
>>>>>>> 3107f34d94dc1341bc062bed4e53aea5e5c12ae7
