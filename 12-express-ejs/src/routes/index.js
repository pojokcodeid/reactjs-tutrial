const {
  findAllBarang,
  findBarangById,
  setNewBarang,
  updateBarang,
  insertBarang,
} = require("../controllers/barangController");
const router = require("express").Router();

router.get("/barang", findAllBarang); //mendapatkan semua barang
router.get("/barang/insert", insertBarang); //menampilkan form tambah barang
router.post("/barang/insert", setNewBarang); //menambahkan barang
router.get("/barang/edit/:key", findBarangById); //mendapatkan barang dengan id tertentu
router.post("/barang/edit", updateBarang); //mengupdate barang, bisa pakai put juga

router.get("/", (req, res) => {
  const data = {
    title: "Contact",
    layout: "layout/main-layout",
    base_url: process.env.BASE_URL,
  };
  res.render("index", data);
});

module.exports = router;
