const barangModel = require("../models/barangModel");

// const data = [
//   {
//     id: 1,
//     nama: "Baju",
//     harga: 100000,
//   },
//   {
//     id: 2,
//     nama: "Celana",
//     harga: 200000,
//   },
//   {
//     id: 3,
//     nama: "Sepatu",
//     harga: 300000,
//   },
//   {
//     id: 4,
//     nama: "Sepeda",
//     harga: 400000,
//   },
// ];

const findAllBarang = async (req, res) => {
  try {
    const barang = await barangModel.getAll();
    const data = {
      title: "Barang",
      barang,
      layout: "layout/main-layout",
      base_url: process.env.BASE_URL,
    };
    res.render("barang/index", data);
  } catch (error) {
    res.status(500).send("<h2>Internal Server Error</h2>");
  }
};

const insertBarang = (req, res) => {
  const data = {
    title: "Contact",
    layout: "layout/main-layout",
    base_url: process.env.BASE_URL,
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
        base_url: process.env.BASE_URL,
        data: hasil[0],
      };
      console.log(data);
      res.render("barang/edit", data);
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const setNewBarang = async (req, res) => {
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
      res.redirect("/barang");
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const updateBarang = async (req, res) => {
  try {
    const { id, mode, nama_barang, jumlah, harga_satuan, kadaluarsa } =
      req.body;
    const data = {
      id,
      namaBarang: nama_barang,
      jumlah,
      hargaSatuan: harga_satuan,
      expireDate: kadaluarsa ? new Date(kadaluarsa) : null,
    };
    let hasil;
    if (mode == "update") {
      hasil = await barangModel.update(data);
    } else {
      hasil = await barangModel.delete(id);
    }
    if (!hasil.affectedRows) {
      let result = {
        status: "error",
        message: `Data dengan key ${key} tidak ditemukan`,
      };
      res.status(404).json(result);
    } else {
      res.redirect("/barang");
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

module.exports = {
  findAllBarang,
  findBarangById,
  setNewBarang,
  updateBarang,
  insertBarang,
};
