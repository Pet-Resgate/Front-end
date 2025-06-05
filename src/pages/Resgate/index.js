import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./Resgate.module.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import Titulo from "components/Titulo";

const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
};

function Resgate() {
  const navigate = useNavigate();

  const [position, setPosition] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    descricao: "",
    animal: "cachorro",
    raca: "vira-lata",
    porte: "pequeno",
    sexo: "fêmea",
    brinca: "3",
    carinhoso: "3",
    sociavel: "3",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuario) {
      alert("Você precisa estar logado para cadastrar um animal.");
      return;
    }

    const petData = {
      id_usuario: usuario.id_usuario || 2,
      nome: formData.nome,
      idade: parseInt(formData.idade),
      animal: formData.animal,
      raca: formData.raca,
      porte: formData.porte,
      descricao: formData.descricao,
      status: "resgatado",
      data_resgate: new Date().toISOString().split("T")[0],
      brinca: parseInt(formData.brinca),
      carinhoso: parseInt(formData.carinhoso),
      sociavel: parseInt(formData.sociavel),
      sexo: formData.sexo,
      latitude: position?.lat || null,
      longitude: position?.lng || null,
    };

    try {
      const response = await fetch(
        "https://web-production-8da63.up.railway.app/Pet/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(petData),
        }
      );

      if (response.ok) {
        alert("🐾 Pet cadastrado com sucesso!");
        setFormData({
          nome: "",
          idade: "",
          descricao: "",
          animal: "cachorro",
          raca: "vira-lata",
          porte: "pequeno",
          sexo: "fêmea",
          brinca: "3",
          carinhoso: "3",
          sociavel: "3",
        });
        setPosition(null);
        navigate("/");
      } else {
        const erro = await response.json();
        alert("Erro ao cadastrar: " + (erro.message || "Erro desconhecido."));
      }
    } catch (err) {
      console.error(err);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Titulo>
          <h1>Cadastrar Animal Resgatado</h1>
        </Titulo>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Nome</label>
        <input
          type="text"
          name="nome"
          className={styles.input}
          value={formData.nome}
          onChange={handleChange}
        />

        <label className={styles.label}>Idade</label>
        <input
          type="number"
          name="idade"
          className={styles.input}
          value={formData.idade}
          onChange={handleChange}
        />

        <label className={styles.label}>Sexo</label>
        <select
          name="sexo"
          className={styles.select}
          value={formData.sexo}
          onChange={handleChange}
        >
          <option value="fêmea">Fêmea</option>
          <option value="macho">Macho</option>
        </select>

        <label className={styles.label}>Animal</label>
        <select
          name="animal"
          className={styles.select}
          value={formData.animal}
          onChange={handleChange}
        >
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
        </select>

        <label className={styles.label}>Raça</label>
        <input
          type="text"
          name="raca"
          className={styles.input}
          value={formData.raca}
          onChange={handleChange}
        />

        <label className={styles.label}>Porte</label>
        <select
          name="porte"
          className={styles.select}
          value={formData.porte}
          onChange={handleChange}
        >
          <option value="pequeno">Pequeno</option>
          <option value="médio">Médio</option>
          <option value="grande">Grande</option>
        </select>

        <label className={styles.label}>Descrição</label>
        <textarea
          name="descricao"
          className={styles.textarea}
          rows="4"
          value={formData.descricao}
          onChange={handleChange}
        />

        <label className={styles.label}>Nível de Brincadeira (1 a 3)</label>
        <select
          name="brinca"
          className={styles.select}
          value={formData.brinca}
          onChange={handleChange}
        >
          {[1, 2, 3].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <label className={styles.label}>Carinhoso (1 a 3)</label>
        <select
          name="carinhoso"
          className={styles.select}
          value={formData.carinhoso}
          onChange={handleChange}
        >
          {[1, 2, 3].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <label className={styles.label}>Sociável (1 a 3)</label>
        <select
          name="sociavel"
          className={styles.select}
          value={formData.sociavel}
          onChange={handleChange}
        >
          {[1, 2, 3].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

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
