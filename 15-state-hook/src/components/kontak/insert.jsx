import React, { useEffect, useState } from "react";
import { useAppState } from "../../contexts/appState";
import { addKontak } from "../../actions/kontakAction";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function formKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [state, dispatch] = useAppState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addKontak(dispatch, { nama, nohp });
    navigate("/");
  };
  return (
    <div>
      <h4>Input Kontak</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Form.Group as={Row} className="mb-3" controlId="nohp">
            <Form.Label column sm="2">
              Nama
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                name="nama"
                onChange={(e) => setNama(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="nohp">
            <Form.Label column sm="2">
              Telepon
            </Form.Label>
            <Col sm="5">
              <Form.Control
                name="nohp"
                type="number"
                onChange={(e) => setNohp(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Row>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Row>
        </Row>
      </form>
    </div>
  );
}

export default formKontak;
