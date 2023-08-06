const {
  findAllBarang,
  findBarangById,
  setNewBarang,
  updateBarang,
  insertBarang,
} = require("../controllers/barangController");
const barangValidation = require("../validation/barangValidation");
const barangRouter = require("express").Router();

barangRouter.get("/", findAllBarang); //mendapatkan semua barang
barangRouter.get("/insert", insertBarang); //menampilkan form tambah barang
barangRouter.post("/insert", barangValidation, setNewBarang); //menambahkan barang
barangRouter.get("/edit/:key", findBarangById); //mendapatkan barang dengan id tertentu
barangRouter.post("/edit", barangValidation, updateBarang); //mengupdate barang, bisa pakai put juga

module.exports = barangRouter;
