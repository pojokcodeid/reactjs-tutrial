import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditKontak, FormKontak, ListKontak } from ".";

export default function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListKontak />} />
        <Route path="create" element={<FormKontak />} />
        <Route path="edit" element={<EditKontak />} />
      </Routes>
    </BrowserRouter>
  );
}
