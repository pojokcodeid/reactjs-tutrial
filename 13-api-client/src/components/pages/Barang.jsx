import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row } from "react-bootstrap";
import InputBarang from "./Input";
import Login from "./Login";
import { Link } from "react-router-dom";

function Barang() {
  const url = "http://localhost/php-tutorial/63-API/barang";
  const [Barang, setBarang] = useState([]);
  if (localStorage.getItem("myToken") == null) {
    Login();
  } else {
    if (
      new Date(localStorage.getItem("myTokenExpire")).getTime() <=
      new Date().getTime()
    ) {
      Login();
    }
  }
  let headersList = {
    Accept: "*/*",
    Authorization: "Bearer " + localStorage.getItem("myToken"),
  };
  const getBarang = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: headersList,
    });
    const dataBarang = await response.json();
    setBarang(dataBarang.data);
  };
  useEffect(() => {
    getBarang();
  }, []);
  const handleInput = (e) => {
    e.preventDefault();
    InputBarang();
  };
  const handleDelete = async (id, e) => {
    e.preventDefault();
    let url = "http://localhost/php-tutorial/63-API/barang/" + id;
    const response = await fetch(url, {
      method: "DELETE",
      headers: headersList,
    });
    const dataBarang = await response.json();
    if (dataBarang.error == null) {
      setBarang(Barang.filter((barang) => barang.barang_id !== id));
      let BarangTmp = [];
      Barang.forEach((item, idx) => {
        if (item.barang_id !== id) {
          BarangTmp.push(item);
        }
      });
      setBarang(BarangTmp);
    }
  };
  const list = Barang.map((barang) => (
    <tr key={barang.barang_id}>
      <td>{barang.barang_id}</td>
      <td>{barang.nama_barang}</td>
      <td>{barang.jumlah}</td>
      <td>{barang.harga_satuan}</td>
      <td>
        {barang.expire_date == "0000-00-00" || barang.expire_date == null
          ? "Tidak Kadaluarsa"
          : barang.expire_date}
      </td>
      <td>
        <Link to={"/edit/" + barang.barang_id}>Edit</Link>
        &nbsp;|&nbsp;
        <a href="#" onClick={(e) => handleDelete(barang.barang_id, e)}>
          Hapus
        </a>
      </td>
    </tr>
  ));
  return (
    <Container>
      <Row>
        <div className="mt-3">
          <Link to="/create" className="btn btn-primary">
            Input Barang
          </Link>
        </div>
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Kadaluarsa</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default Barang;
