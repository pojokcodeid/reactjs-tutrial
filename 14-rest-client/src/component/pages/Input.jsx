import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Input() {
  const [inputData, setInputData] = useState({
    nama_barang: "",
    jumlah: "",
    harga_satuan: "",
    kadaluarsa: "",
  });
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
  const url = "http://localhost/php-tutorial/63-API/barang";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      headers: headerList,
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error == null) {
          setInputData({
            nama_barang: "",
            jumlah: "",
            harga_satuan: "",
            kadaluarsa: "",
          });
          Swal.fire({
            title: "Berhasil !",
            text: "Barang berhasil ditambahkan",
            icon: "success",
          });
          navigate("/");
        } else {
          Swal.fire({
            title: "Gagal !",
            text: res.message[0],
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="container mt-5">
        <h2>Input Barang</h2>
        <div className="row mt-3">
          <div className="col">
            <Form.Group as={Row} className="mb-3" controlId="nama_barang">
              <Form.Label column sm="2">
                Nama Barang
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  name="nama_barang"
                  defaultValue=""
                  onChange={(e) =>
                    setInputData({ ...inputData, nama_barang: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="jumlah">
              <Form.Label column sm="2">
                Jumlah
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  name="jumlah"
                  type="number"
                  defaultValue={""}
                  onChange={(e) =>
                    setInputData({ ...inputData, jumlah: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="harga_satuan">
              <Form.Label column sm="2">
                Harga
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  name="harga_satuan"
                  type="number"
                  defaultValue={""}
                  onChange={(e) =>
                    setInputData({ ...inputData, harga_satuan: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="kadaluarsa">
              <Form.Label column sm="2">
                Kadaluarsa
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  name="kadaluarsa"
                  type="date"
                  defaultValue={""}
                  onChange={(e) =>
                    setInputData({ ...inputData, kadaluarsa: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="kadaluarsa">
              <div className="col-2"></div>
              <Col sm="4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Col>
            </Form.Group>
          </div>
        </div>
      </div>
    </Form>
  );
}
