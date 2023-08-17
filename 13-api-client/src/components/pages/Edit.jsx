import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import Login from "./Login";

export default function Edit() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const url = "http://localhost/php-tutorial/63-API/barang/" + id;
  const navigate = useNavigate();
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
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBarang();
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = "http://localhost/php-tutorial/63-API/barang/" + id;
    const response = await fetch(url, {
      method: "PATCH",
      headers: headersList,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 201) {
          alert("Barang berhasil diupdate");
          navigate("/");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form onSubmit={handleUpdate}>
      <div className="container mt-5">
        <h2>Edit Barang</h2>
        <div className="row mt-3">
          <div className="col">
            <Form.Group as={Row} className="mb-3" controlId="nama_barang">
              <Form.Label column sm="2">
                Nama Barang
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  name="nama_barang"
                  defaultValue={data.nama_barang}
                  onChange={(e) =>
                    setData({ ...data, nama_barang: e.target.value })
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
                  defaultValue={data.jumlah}
                  onChange={(e) => setData({ ...data, jumlah: e.target.value })}
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
                  defaultValue={data.harga_satuan}
                  onChange={(e) =>
                    setData({ ...data, harga_satuan: e.target.value })
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
                  defaultValue={data.expire_date}
                  onChange={(e) =>
                    setData({ ...data, kadaluarsa: e.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="kadaluarsa">
              <div className="col-2"></div>
              <Col sm="4">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </Col>
            </Form.Group>
          </div>
        </div>
      </div>
    </Form>
  );
}
