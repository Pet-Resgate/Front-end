import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Carousel from "components/Carousel";
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
        <h1>Destaques de animais disponíveis</h1>
      </Titulo>
    </>
  );
}

export default Inicio;
