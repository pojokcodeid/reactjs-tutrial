const barangModel = require("../models/barangModel");
const { validationResult } = require("express-validator");

const findAllBarang = async (req, res) => {
  try {
    const barang = await barangModel.getAll();
    const data = {
      title: "Barang",
      barang,
      layout: "layout/main-layout",
      message: null,
    };
    res.render("barang/index", data);
  } catch (error) {
    res.status(500).send("<h2>Internal Server Error</h2>");
  }
};

const insertBarang = (req, res) => {
  const data = {
    title: "Insert Barang",
    layout: "layout/main-layout",
    errors: null,
    data: null,
  };
  res.render("barang/insert", data);
};

const findBarangById = async (req, res) => {
  try {
    const { key } = req.params;
    // respon berupa json
    let result = {};
    const hasil = await barangModel.getById(key);
    if (hasil.length === 0) {
      result = {
        status: "error",
        message: `Data dengan key ${key} tidak ditemukan`,
      };
      res.status(404).json(result);
    } else {
      const data = {
        title: "Edit Barang",
        layout: "layout/main-layout",
        data: hasil[0],
        errors: null,
      };
      res.render("barang/edit", data);
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const setNewBarang = async (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    try {
      const { nama_barang, jumlah, harga_satuan, kadaluarsa } = req.body;
      let result = {};
      let tgl = kadaluarsa ? new Date(kadaluarsa) : null;
      const data = {
        namaBarang: nama_barang,
        jumlah: jumlah,
        hargaSatuan: harga_satuan,
        expireDate: tgl,
      };
      const hasil = await barangModel.insert(data);
      if (!hasil.affectedRows) {
        result = {
          status: "error",
          message: `Data gagal ditambahkan`,
        };
        res.status(404).json(result);
      } else {
        const barang = await barangModel.getAll();
        const data = {
          title: "Barang",
          barang,
          layout: "layout/main-layout",
          message: "Data berhasil ditambahkan",
        };
        res.render("barang/index", data);
      }
    } catch (error) {
      res.status(500).json({ status: "error", message: error });
    }
  } else {
    const data = {
      title: "Contact",
      layout: "layout/main-layout",
      errors: result.array(),
      data: req.body,
    };
    res.render("barang/insert", data);
  }
};

const updateBarang = async (req, res) => {
  const result = validationResult(req);
  const { id, mode, nama_barang, jumlah, harga_satuan, kadaluarsa } = req.body;
  const data = {
    id,
    namaBarang: nama_barang,
    jumlah,
    hargaSatuan: harga_satuan,
    expireDate: kadaluarsa ? new Date(kadaluarsa) : null,
  };
  let hasil;
  let message = "";
  if (result.isEmpty()) {
    try {
      if (mode == "update") {
        hasil = await barangModel.update(data);
        message = "Data berhasil diubah";
      } else {
        hasil = await barangModel.delete(id);
        message = "Data berhasil dihapus";
      }
      if (!hasil.affectedRows) {
        let result = {
          status: "error",
          message: `Data dengan key ${key} tidak ditemukan`,
        };
        res.status(404).json(result);
      } else {
        const barang = await barangModel.getAll();
        const data = {
          title: "Barang",
          barang,
          layout: "layout/main-layout",
          message: message,
        };
        res.render("barang/index", data);
      }
    } catch (error) {
      res.status(500).json({ status: "error", message: error });
    }
  } else {
    const data = {
      title: "Edit Barang",
      layout: "layout/main-layout",
      data: {
        barang_id: id,
        nama_barang: nama_barang,
        jumlah: jumlah,
        harga_satuan: harga_satuan,
        kadaluarsa: kadaluarsa ? new Date(kadaluarsa) : null,
      },
      errors: result.array(),
    };
    res.render("barang/edit", data);
  }
};

module.exports = {
  findAllBarang,
  findBarangById,
  setNewBarang,
  updateBarang,
  insertBarang,
};
