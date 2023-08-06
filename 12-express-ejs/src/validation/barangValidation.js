const { body } = require("express-validator");

const barangValidation = [
  body("nama_barang", "Nama barang tidak boleh kosong").notEmpty().trim(),
  body("jumlah", "Jumlah tidak boleh kosong").notEmpty().trim(),
  body("harga_satuan", "Harga tidak boleh kosong").notEmpty().trim(),
];

module.exports = barangValidation;
