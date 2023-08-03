const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "latihan",
  port: 3306,
});

module.exports = {
  getConnection() {
    return new Promise(function (res, rej) {
      pool
        .getConnection()
        .then(function (conn) {
          res(conn);
        })
        .catch(function (error) {
          rej(error);
        });
    });
  },
};
