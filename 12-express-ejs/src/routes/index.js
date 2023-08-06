const express = require("express");
const barangRouter = require("./barang");
const kategoriRouter = require("./barangKategori");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    title: "Contact",
    layout: "layout/main-layout",
  };
  res.render("index", data);
});

router.use("/barang", barangRouter);
router.use("/kategori", kategoriRouter);

router.use("*", (req, res) => {
  const data = {
    title: "Error",
    layout: "layout/main-layout",
  };
  res.render("404", data);
});

module.exports = router;
