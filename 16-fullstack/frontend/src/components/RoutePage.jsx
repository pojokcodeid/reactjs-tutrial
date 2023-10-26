import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormKontak, ListKontak } from ".";

export default function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListKontak />} />
        <Route path="create" element={<FormKontak />} />
        <Route path="edit/:id" element={<FormKontak />} />
      </Routes>
    </BrowserRouter>
  );
}
