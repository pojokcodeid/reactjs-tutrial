import React, { useEffect } from "react";
import { useAppState } from "../../contexts/appState";
import {
  deleteKontak,
  detailKontak,
  getKontakList,
} from "../../actions/kontakAction";
import Table from "react-bootstrap/Table";

function listKontak() {
  const [state, dispatch] = useAppState();
  const {
    getKontakResult,
    getKontakLoading,
    getKontakError,
    deleteKontakResult,
  } = state;
  useEffect(() => {
    getKontakList(dispatch);
  }, [dispatch]);
  useEffect(() => {
    if (deleteKontakResult) {
      getKontakList(dispatch);
    }
  }, [dispatch, deleteKontakResult]);
  return (
    <div>
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
              return (
                // <p key={kontak.id}>
                //   {kontak.nama}-{kontak.nohp}-
                //   <button
                //     style={{ marginLeft: "10px" }}
                //     onClick={() => deleteKontak(dispatch, kontak.id)}
                //   >
                //     Delete
                //   </button>
                //   <button
                //     style={{ marginLeft: "10px" }}
                //     onClick={() => detailKontak(dispatch, kontak)}
                //   >
                //     Edit
                //   </button>
                // </p>
                <tr key={kontak.id}>
                  <td>2</td>
                  <td>{kontak.nama}</td>
                  <td>{kontak.nohp}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteKontak(dispatch, kontak.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="ms-2 btn btn-primary"
                      onClick={() => detailKontak(dispatch, kontak)}
                    >
                      Edit
                    </button>
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
