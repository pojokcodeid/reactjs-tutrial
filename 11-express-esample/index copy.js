const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

// representasi data dari database
const data = [
  {
    id: 1,
    nama: "Baju",
    harga: 100000,
  },
  {
    id: 2,
    nama: "Celana",
    harga: 200000,
  },
  {
    id: 3,
    nama: "Sepatu",
    harga: 300000,
  },
  {
    id: 4,
    nama: "Sepeda",
    harga: 400000,
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
  // res.send("Hello World - express");
});

app.get("/barang", (req, res) => {
  // simulasi data dari database
  const barang = data;
  // respon berupa json
  const result = {
    status: "ok",
    data: barang,
  };
  // kembalikan result
  res.json(result);
});

app.get("/barang/:key", (req, res) => {
  const { key } = req.params;
  // respon berupa json
  let result = {};
  const hasil = data[key];
  if (hasil === undefined) {
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
  // kembalikan result
});

// post data
app.post("/barang", (req, res) => {
  const { nama, harga } = req.body;
  const id = data[data.length - 1].id + 1;
  const newBarang = {
    id: id,
    nama: nama,
    harga: harga,
  };
  data.push(newBarang);
  res.status(201).json({
    status: "ok",
    message: "Barang berhasil ditambahkan",
    data: newBarang,
  });
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
});

app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  res.send(`User page, hello from id ${id}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
