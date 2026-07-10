import React from "react";
import fotoDosen from "../assets/1.png";
import "./CardDosen.css";

export default function CardDosen({ dosen }) {
  return (
    <div className="card-dosen">
      <img src={fotoDosen} alt={dosen.nama} className="foto-dosen" />

      <div className="card-header">
        <h3>{dosen.nama}</h3>
        <p className="nidn">NIDN: {dosen.nidn}</p>
      </div>

      <div className="card-body">
        <p>
          <strong>Keahlian:</strong> {dosen.keahlian}
        </p>
        <div className="pendidikan">
          <small>S2: {dosen.pendidikan.magister}</small>
          {dosen.pendidikan.doktor !== "-" && (
            <small>S3: {dosen.pendidikan.doktor}</small>
          )}
        </div>

        {/* Tombol PDDikti */}
        {dosen.pddikti && (
          <a
            href={dosen.pddikti}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pddikti"
          >
            PDDikti
          </a>
        )}
      </div>
    </div>
  );
}
