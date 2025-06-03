import { useState } from "react";
import styles from "./SobreProjeto.module.css";
import foto1 from "../../assets/img_util/CachorroCorrendo.jpg";
import foto2 from "../../assets/img_util/GatoDeitado.jpg";
import foto3 from "../../assets/img_util/CachorroDeitado.jpg";
import impacta from "../../assets/logo_grupo_impacta_azul-removebg-preview.png";

function SobreProjeto() {
  const [ativo, setAtivo] = useState("missao");
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <img src={impacta} alt="Faculdade Impacta" />
      </section>

      <section className={styles.historia}>
        <h2>Nossa História</h2>
        <p>
          O Pet Resgate nasceu em 2025 com um propósito claro: conectar pessoas,
          ONGs e amantes de animais para transformar a realidade dos pets em
          situação de abandono. Acreditamos que, com tecnologia, empatia e
          colaboração, é possível construir um futuro mais digno para os animais
          de rua. Somos uma equipe independente de estudantes e profissionais
          apaixonados pela causa animal e pela inovação. Criamos uma plataforma
          digital que facilita o resgate, acolhimento e adoção responsável de
          animais, tornando o processo mais rápido, seguro e acessível. Nosso
          aplicativo permite que qualquer pessoa registre um animal encontrado
          na rua, acione ONGs parceiras e acompanhe todo o processo até a
          adoção. Também oferecemos um espaço para divulgação de histórias de
          sucesso, conteúdos educativos e ferramentas que ajudam a promover a
          conscientização e o cuidado responsável com os pets. Mais do que um
          aplicativo, o Pet Resgate é um movimento. Um convite para unir forças,
          dar voz aos que não têm e criar novas possibilidades para milhares de
          vidas. Se você acredita nesse propósito, vem com a gente!
        </p>
      </section>

      <section className={styles.mvv}>
        <div className={styles.botoes}>
          <button
            className={ativo === "missao" ? styles.ativo : ""}
            onClick={() => setAtivo("missao")}
          >
            Missão
          </button>
          <button
            className={ativo === "visao" ? styles.ativo : ""}
            onClick={() => setAtivo("visao")}
          >
            Visão
          </button>
          <button
            className={ativo === "valores" ? styles.ativo : ""}
            onClick={() => setAtivo("valores")}
          >
            Valores
          </button>
        </div>

        <div className={styles.mvvItem}>
          {ativo === "missao" && (
            <p>
              Nossa missão é transformar a realidade dos animais em situação de
              abandono por meio da tecnologia, empatia e colaboração. O Pet
              Resgate existe para facilitar o resgate, o acolhimento e a adoção
              responsável, conectando pessoas dispostas a ajudar com ONGs e pets
              que precisam de um novo começo. Queremos ser a ponte entre quem
              encontra um animal na rua e aqueles que podem oferecer amor,
              cuidado e um lar de verdade. Trabalhamos para tornar esse processo
              mais ágil, humano e acessível, sempre com o bem-estar animal como
              prioridade.
            </p>
          )}
          {ativo === "visao" && (
            <p>
              Sonhamos com um futuro em que nenhum animal precise viver nas
              ruas, abandonado ou invisível. Queremos ser reconhecidos como a
              principal plataforma de resgate e adoção do Brasil, promovendo
              soluções inovadoras que unem tecnologia e causa social. Nossa
              visão é construir uma rede forte e engajada, onde cidadãos, ONGs e
              voluntários possam colaborar com facilidade e transparência.
              Acreditamos que, juntos, podemos criar um impacto real e
              duradouro, oferecendo a milhares de animais uma nova chance de
              viver com dignidade, segurança e afeto.
            </p>
          )}
          {ativo === "valores" && (
            <p>
              Empatia: Colocar o bem-estar dos animais sempre em primeiro lugar.
              Inovação: Usar a tecnologia como ponte para soluções eficazes e
              acessíveis. Colaboração: Unir forças com ONGs, cidadãos e
              voluntários em prol de um bem comum. Transparência: Agir com
              clareza e responsabilidade em cada etapa do processo. Educação:
              Informar e conscientizar para transformar atitudes e promover o
              cuidado responsável.
            </p>
          )}
        </div>
      </section>
      <section className={styles.galeria}>
        <img src={foto1} alt="Pet 1" />
        <img src={foto2} alt="Pet 2" />
        <img src={foto3} alt="Pet 3" />
      </section>
    </div>
  );
}

export default SobreProjeto;
