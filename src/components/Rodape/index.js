import styles from "./Rodape.module.css";
import iconImpacta from "../../assets/icon-impacta.png";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div>
        <img src={iconImpacta} alt="Logo Impacta" width="300rem" />
      </div>
      <div>
        <span>Copyright 2025 - Todos os direitos reservados</span>
        <h4>Desenvolvido por</h4>
        <h2>Pet Resgate</h2>
      </div>
      <div>
        <h4>Redes Sociais</h4>
      </div>
    </footer>
  );
}

export default Rodape;
