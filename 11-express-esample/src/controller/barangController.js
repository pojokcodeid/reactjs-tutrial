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
    // respon berupa json
    const result = {
      status: "ok",
      data: barang,
    };
    // kembalikan result
    res.json(result);
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const findBarangById = async (req, res) => {
  try {
    const { key } = req.params;
    // respon berupa json
    let result = {};
    // const hasil = data[key];
    const hasil = await barangModel.getById(key);
    if (hasil.length === 0) {
      result = {
        status: "error",
        message: `Data dengan key ${key} tidak ditemukan`,
      };
      res.status(404).json(result);
    } else {
      result = {
        status: "ok",
        data: hasil,
      };
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const setNewBarang = async (req, res) => {
  try {
    const { namaBarang, jumlah, hargaSatuan, expireDate } = req.body;
    let result = {};
    // const hasil = data[key];
    const data = {
      namaBarang,
      jumlah,
      hargaSatuan,
      expireDate,
    };
    const hasil = await barangModel.insert(data);
    if (!hasil.affectedRows) {
      result = {
        status: "error",
        message: `Data gagal ditambahkan`,
      };
      res.status(404).json(result);
    } else {
      result = {
        status: "ok",
        data: data,
      };
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const updateBarang = async (req, res) => {
  try {
    const { key } = req.params;
    const { namaBarang, jumlah, hargaSatuan, expireDate } = req.body;
    let result = {};
    // const hasil = data[key];
    const data = {
      id: key,
      namaBarang,
      jumlah,
      hargaSatuan,
      expireDate,
    };
    const hasil = await barangModel.update(data);
    if (!hasil.affectedRows) {
      result = {
        status: "error",
        message: `Data dengan key ${key} tidak ditemukan`,
      };
      res.status(404).json(result);
    } else {
      result = {
        status: "ok",
        data: data,
      };
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error });
  }
};

const deleteBarangById = async (req, res) => {
  try {
    const { key } = req.params;
    let result = {};
    // const hasil = data[key];
    const hasil = await barangModel.delete(key);
    if (!hasil.affectedRows) {
      result = {
        status: "error",
        message: `Data dengan key ${key} tidak ditemukan`,
      };
      res.status(404).json(result);
    } else {
      result = {
        status: "ok",
        data: key,
      };
      res.json(result);
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
  deleteBarangById,
};
