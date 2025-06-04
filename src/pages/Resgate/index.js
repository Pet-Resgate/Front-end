import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./Resgate.module.css";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
};

function Resgate() {
  const [position, setPosition] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      latitude: position?.lat || null,
      longitude: position?.lng || null,
    };
    console.log("Dados enviados:", data);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Cadastrar Animal Resgatado</h1>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="nome" className={styles.label}>
          Nome
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          className={styles.input}
          onChange={handleChange}
        />

        <label htmlFor="idade" className={styles.label}>
          Idade
        </label>
        <input
          type="text"
          id="idade"
          name="idade"
          className={styles.input}
          onChange={handleChange}
        />

        <label htmlFor="descricao" className={styles.label}>
          Descrição
        </label>
        <textarea
          id="descricao"
          name="descricao"
          className={styles.textarea}
          rows="5"
          onChange={handleChange}
        />

        <h2 className={styles.subTitle}>Cadastrar Localização</h2>
        <div className={styles.mapContainer}>
          <MapContainer
            center={[-23.55052, -46.633308]}
            zoom={13}
            scrollWheelZoom={false}
            className={styles.map}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <LocationMarker setPosition={setPosition} />
            {position && (
              <Marker
                position={position}
                icon={L.icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })}
              />
            )}
          </MapContainer>
        </div>

        {position && (
          <p className={styles.coords}>
            Latitude: {position.lat.toFixed(5)} | Longitude:{" "}
            {position.lng.toFixed(5)}
          </p>
        )}

        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Resgate;
