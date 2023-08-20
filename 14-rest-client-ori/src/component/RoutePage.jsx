import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Barang from "./pages/Barang";
import Input from "./pages/Input";
import Edit from "./pages/Edit";

export default function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Barang />} />
        <Route path="create" element={<Input />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
