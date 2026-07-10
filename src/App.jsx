import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import DaftarDosen from './pages/DaftarDosen'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/id" replace />} />
        <Route path="/:lang" element={<DaftarDosen />} />
      </Routes>
    </HashRouter>
  )
}