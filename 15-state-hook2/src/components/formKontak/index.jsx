import React, { useEffect, useState } from "react";
import { useAppState } from "../../contexts/appState";
import {
  addKontak,
  getKontakList,
  updateKontak,
} from "../../actions/kontakAction";
import { Col, Row } from "react-bootstrap";

function formKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");
  const [state, dispatch] = useAppState();
  const { addKontakResult, detailKontakResult, updateKontakResult } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. masuk handle submit");
    if (id) {
      updateKontak(dispatch, { id, nama, nohp });
    } else {
      addKontak(dispatch, { nama, nohp });
    }
  };
  useEffect(() => {
    if (addKontakResult) {
      getKontakList(dispatch);
      setNama("");
      setNohp("");
      setId("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult]);

  useEffect(() => {
    if (updateKontakResult) {
      getKontakList(dispatch);
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);
  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Col xs={5}>
            <input
              className="form-control"
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </Col>
          <Col>
            <input
              className="form-control"
              type="text"
              name="nohp"
              id="nohp"
              placeholder="nohp"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
            />
          </Col>
          <Col>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default formKontak;
