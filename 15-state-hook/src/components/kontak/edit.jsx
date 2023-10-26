import React, { useEffect, useState } from "react";
import { useAppState } from "../../contexts/appState";
import { updateKontak } from "../../actions/kontakAction";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function editKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");
  const [state, dispatch] = useAppState();
  const { detailKontakResult } = state;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateKontak(dispatch, { id, nama, nohp });
    navigate("/");
  };
  useEffect(() => {
    if (detailKontakResult) {
      console.log("ini terdefinisi");
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult]);
  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
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
                value={nama}
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
                value={nohp}
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

export default editKontak;
