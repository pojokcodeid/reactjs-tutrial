import React, { useEffect } from "react";
import { useAppState } from "../../contexts/appState";
import {
  deleteKontak,
  detailKontak,
  getKontakList,
} from "../../actions/kontakAction";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function listKontak() {
  const [state, dispatch] = useAppState();
  const {
    getKontakResult,
    getKontakLoading,
    getKontakError,
    deleteKontakResult,
    addKontakResult,
    updateKontakResult,
  } = state;
  useEffect(() => {
    getKontakList(dispatch);
  }, [dispatch]);
  useEffect(() => {
    if (deleteKontakResult) {
      getKontakList(dispatch);
    }
  }, [dispatch, deleteKontakResult]);
  useEffect(() => {
    if (addKontakResult) {
      getKontakList(dispatch);
    }
  }, [addKontakResult, dispatch]);
  useEffect(() => {
    if (updateKontakResult) {
      getKontakList(dispatch);
    }
  }, [updateKontakResult, dispatch]);
  let no = 0;
  return (
    <div>
      <Link to="/create" className="mt-3 btn btn-primary">
        Create
      </Link>
      <Table className="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Tlp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getKontakResult ? (
            getKontakResult.map((kontak) => {
              no++;
              return (
                <tr key={kontak.id}>
                  <td>{no}</td>
                  <td>{kontak.nama}</td>
                  <td>{kontak.nohp}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteKontak(dispatch, kontak.id)}
                    >
                      Delete
                    </button>
                    <Link
                      to="/edit"
                      className="ms-2 btn btn-primary"
                      onClick={() => detailKontak(dispatch, kontak)}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : getKontakLoading ? (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={4}>
                {getKontakError ? getKontakError : "data kosong"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default listKontak;
