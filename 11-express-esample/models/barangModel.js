const pool = require("../utils/db.js");
module.exports = {
  async getAll() {
    try {
      conn = await pool.getConnection();
      sql = "SELECT * from barang";
      const rows = await conn.query(sql);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  async getById(id) {
    try {
      conn = await pool.getConnection();
      sql = "SELECT * from barang where barang_id = ?";
      const rows = await conn.query(sql, [id]);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
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
      conn.end();
      return rows;
    } catch (err) {
      throw err;
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
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },

  async delete(id) {
    try {
      conn = await pool.getConnection();
      sql = "DELETE FROM barang WHERE barang_id = ?";
      const rows = await conn.query(sql, [id]);
      conn.end();
      return rows;
    } catch (err) {
      throw err;
    }
  },
};
