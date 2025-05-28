import Banner from "Components/Banner";
import Card from "Components/Card";
import Titulo from "Components/Titulo";
import videos from "json/db.json";
import styles from "./Inicio.module.css";
import Carousel from "Components/Carousel";
import logo from "./logo.png";

function Inicio() {
  return (
    <>
      <Carousel>
        <div
          style={{
            backgroundColor: "var(--amarelo_principal)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo do cinetag" height="100%"></img>
        </div>
        <div style={{ height: "100%" }}>
          <Banner imagem="home" />
        </div>
        <div
          style={{
            backgroundColor: "var(--amarelo_principal)",
            height: "100%",
          }}
        >
          Slide 3
        </div>
      </Carousel>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
