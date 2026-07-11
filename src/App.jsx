import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DaftarDosen from "./pages/DaftarDosen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/id" replace />} />
        <Route path="/:lang" element={<DaftarDosen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
