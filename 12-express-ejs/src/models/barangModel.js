const pool = require("../utils/db.js");
module.exports = {
  async getAll() {
    try {
      conn = await pool.getConnection();
      sql = "SELECT * from barang";
      const rows = await conn.query(sql);
      return rows;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  },

  async getById(id) {
    try {
      conn = await pool.getConnection();
      sql = "SELECT * from barang where barang_id = ?";
      const rows = await conn.query(sql, [id]);
      return rows;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  },

  async update(data) {
    try {
      conn = await pool.getConnection();
      sql =
        "UPDATE barang SET nama_barang = ?, jumlah=?, harga_satuan = ?, expire_date = ? WHERE barang_id = ?";
      const rows = await conn.query(sql, [
        data.namaBarang,
        data.jumlah,
        data.hargaSatuan,
        data.expireDate,
        data.id,
      ]);
      return rows;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  },

  async insert(data) {
    try {
      conn = await pool.getConnection();
      sql =
        "INSERT INTO barang (nama_barang,jumlah,harga_satuan,expire_date) values(?,?,?,?)";
      const rows = await conn.query(sql, [
        data.namaBarang,
        data.jumlah,
        data.hargaSatuan,
        data.expireDate,
      ]);
      return rows;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  },

  async delete(id) {
    try {
      conn = await pool.getConnection();
      sql = "DELETE FROM barang WHERE barang_id = ?";
      const rows = await conn.query(sql, [id]);
      return rows;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  },
};
