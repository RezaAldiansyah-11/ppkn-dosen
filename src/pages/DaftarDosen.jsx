import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { dataDosenID } from "../data/dosen-id";
import { dataDosenEN } from "../data/dosen-en";
import CardDosen from "../components/CardDosen";

function DaftarDosen() {
  const { lang } = useParams();

  if (lang !== "id" && lang !== "en") {
    return <Navigate to="/id" replace />;
  }

  const currentData = lang === "id" ? dataDosenID : dataDosenEN;

  return (
    <div className="app-container">
      <div className="grid-dosen">
        {currentData.map((dosen) => (
          <CardDosen key={dosen.id} dosen={dosen} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default DaftarDosen;
