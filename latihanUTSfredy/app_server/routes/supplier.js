var express = require('express');
var router = express.Router();

const suppController = require('../controllers/supplier');
router.get("/", suppController.index); //list mahasiswa
router.post("/insert", suppController.insert); //insert mahasiswa

module.exports = router;