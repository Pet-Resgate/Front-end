import styles from "./FaleConosco.module.css";
import ilustracao from "../../assets/web_ilustration.svg";
import Titulo from "components/Titulo";

function FaleConosco() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.formBox}>
          <Titulo>
            <h1>Fale Conosco</h1>
          </Titulo>
          <form className={styles.form}>
            <label>
              Nome
              <input type="text" placeholder="" />
            </label>
            <label>
              E-mail
              <input type="email" placeholder="" />
            </label>
            <label>
              Mensagem
              <textarea placeholder="" />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className={styles.illustration}>
          <img src={ilustracao} alt="Ilustração de contato" />
        </div>
      </div>
    </div>
  );
}
export default FaleConosco;
