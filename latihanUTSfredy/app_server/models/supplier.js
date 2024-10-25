let mongoose = require("mongoose");

//https://mongoosejs.com/docs/schematypes.html
//Create Collection Schema
let schemasupp = new mongoose.Schema({
  nama_supplier: String,
  alamat:String,
  kontak:String,
  email:String,
  tanggal_mendaftar:Date,
});

//create Model from Schema
mongoose.model("Supplier", schemasupp);