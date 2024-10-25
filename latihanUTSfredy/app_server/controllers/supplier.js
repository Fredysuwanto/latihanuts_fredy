const mongoose = require("mongoose");
const Supplier = mongoose.model("Supplier");

//untuk menghandle request get all mahasiswa
const index = (req, res, next) => {
    Supplier.find({}, { __v: 0 })
      .then((supp) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: supp
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const supp = new Supplier({
        nama_supplier: req.body.nama_supplier,
        alamat: req.body.alamat,
        kontak: req.body.kontak,
        email: req.body.email,
        tanggal_mendaftar: req.body.tanggal_mendaftar
    });
  
    supp
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = {
    index, insert
}