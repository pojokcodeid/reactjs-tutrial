import React, { useEffect, useState } from "react";
import Login from "../Login";
import { Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

export default function Barang() {
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
  let headerList = {
    Accept: "*/*",
    Authorization: "Bearer " + localStorage.getItem("myToken"),
  };
  const getBarang = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: headerList,
    });
    const dataBarang = await response.json();
    setBarang(dataBarang.data);
    console.log(dataBarang.data);
  };
  useEffect(() => {
    getBarang();
  }, []);
  const handleDelete = async (id, e) => {
    e.preventDefault();
    let url = "http://localhost/php-tutorial/63-API/barang/" + id;
    Swal.fire({
      icon: "warning",
      title: "Konfirmasi",
      text: "Apakah anda yakin ?",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(url, {
          method: "DELETE",
          headers: headerList,
        });
        const dataBarang = await response.json();
        if (dataBarang.error == null) {
          setBarang(Barang.filter((barang) => barang.barang_id !== id));
          let barangTmp = [];
          Barang.forEach((item, idx) => {
            if (item.barang_id !== id) {
              barangTmp.push(item);
            }
          });
          setBarang(barangTmp);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };
  const list = Barang.map((barang) => (
    <tr key={barang.barang_id}>
      <td>{barang.barang_id}</td>
      <td>{barang.nama_barang}</td>
      <td>{barang.jumlah}</td>
      <td>{barang.harga_satuan}</td>
      <td>{barang.expire_date}</td>
      <td>
        <Link
          className="btn btn-sm btn-primary"
          to={"/edit/" + barang.barang_id}
        >
          Edit
        </Link>
        <button
          className="ms-2 btn btn-sm btn-danger"
          onClick={(e) => handleDelete(barang.barang_id, e)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Container>
      <Row>
        <div className="mt-3">
          <Link to="/create">
            <button className="btn btn-sm btn-primary">Create</button>
          </Link>
        </div>
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama barang</th>
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
