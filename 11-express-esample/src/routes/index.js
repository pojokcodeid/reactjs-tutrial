const {
  findAllBarang,
  findBarangById,
  setNewBarang,
  updateBarang,
  deleteBarangById,
} = require("../controller/barangController");

const router = require("express").Router();

router.get("/barang", findAllBarang); //mendapatkan semua barang
router.get("/barang/:key", findBarangById); //mendapatkan barang dengan id tertentu
router.post("/barang", setNewBarang); //menambahkan barang
router.patch("/barang/:key", updateBarang); //mengupdate barang, bisa pakai put juga
router.delete("/barang/:key", deleteBarangById); //menghapus barang

module.exports = router;
