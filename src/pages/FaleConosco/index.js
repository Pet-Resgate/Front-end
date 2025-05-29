import styles from "./FaleConosco.module.css";
import ilustracao from "../../assets/img_util/undraw_contact-us_kcoa.svg";

function FaleConosco() {
    return (
    <div className="styles.container">
        <div className={styles.mainContent}>

            <div className={styles.formBox}>
                <h2 className="styles.title">Fale Conosco</h2>
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

            <div>
                <img src={ilustracao} alt="Ilustração de contato" className={styles.illustration} />
            </div>
    
        </div>    
    </div>
    );
}
export default FaleConosco;