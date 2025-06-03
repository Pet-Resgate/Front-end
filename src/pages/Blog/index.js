import React from "react";
import post01 from "../../assets/blog/post01.png";
import post02 from "../../assets/blog/post02.png";
import styles from "./Blog.module.css";
import Titulo from "components/Titulo";
import CabecalhoLink from "components/CabecalhoLink";

function Blog() {
  return (
    <div className={styles.blog}>
      <div className={styles.blogContent}>
        <div className={styles.post}>
          <img src={post01} alt="Blog" className={styles.blogImage} />
          <Titulo>
            <h1 className={styles.blogTitle}>
              COMO CUIDAR BEM DO SEU GATINHO?
            </h1>
          </Titulo>
          <p className={styles.blogDescription}>
            Cuidar bem de um gatinho vai além de alimentar e dar carinho — é
            garantir um ambiente seguro, saudável e estimulante para que ele
            cresça feliz. Um dos primeiros passos é telar todas as janelas e
            sacadas, evitando quedas e fugas, já que gatos são curiosos e podem
            se arriscar facilmente. Outro cuidado importante é verticalizar o
            ambiente: gatos adoram subir, explorar e observar tudo do alto.
            Instalar prateleiras, nichos e arranhadores verticais ajuda a manter
            o pet ativo, entretido e mentalmente estimulado. Também é essencial
            oferecer alimentação de qualidade, vacinas em dia, vermifugação e
            castração. Uma caixinha de areia limpa e em local tranquilo,
            brinquedos interativos e momentos de atenção ajudam a manter o
            gatinho equilibrado e feliz...
          </p>
          <a href="#" className={styles.readMore}>
            Leia mais
          </a>
        </div>
        <div className={styles.post}>
          <img src={post02} alt="Blog" className={styles.blogImage} />
          <Titulo>
            <h1 className={styles.blogTitle}>ADOÇÃO DE ADULTOS E IDOSOS</h1>
          </Titulo>
          <p className={styles.blogDescription}>
            Animais adultos e idosos costumam ser deixados de lado em feiras e
            sites de adoção, mas são justamente os que mais precisam de um lar.
            Ao contrário do que muitos pensam, esses pets têm muito amor para
            dar — e são, muitas vezes, mais tranquilos, já educados e
            agradecidos. Adotar um pet mais velho significa pular a fase
            destrutiva dos filhotes, contar com um temperamento já formado e
            proporcionar conforto a quem já enfrentou o abandono. Eles se
            adaptam bem, criam vínculos profundos e demonstram uma gratidão
            comovente. Dar uma nova chance a um animal adulto ou idoso é um ato
            de empatia, responsabilidade e amor. E, em troca, você ganha um
            amigo fiel, calmo e cheio de carinho.
          </p>
          <a href="#" className={styles.readMore}>
            Leia mais
          </a>
        </div>
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogPost}>
          <h2 className={styles.postTitle}>Latest Post</h2>
          <p className={styles.postContent}>
            This is where the content of the latest blog post will go. Stay
            tuned for more updates!
          </p>
        </div>
        <div className={styles.blogPost}>
          <h2 className={styles.postTitle}>Previous Post</h2>
          <p className={styles.postContent}>
            This is where the content of a previous blog post will go. Check it
            out for more insights!
          </p>
        </div>
        <h2>Categorias</h2>
        <div className={styles.divider}></div>
        <div className={styles.categories}>
          <CabecalhoLink>
            <span className={styles.category}>Cuidados</span>
          </CabecalhoLink>
          <CabecalhoLink>
            <span className={styles.category}>Saúde</span>
          </CabecalhoLink>
          <CabecalhoLink>
            <span className={styles.category}>Adoção</span>
          </CabecalhoLink>
          <CabecalhoLink>
            <span className={styles.category}>Dicas</span>
          </CabecalhoLink>
          <CabecalhoLink>
            <span className={styles.category}>Curiosidades</span>
          </CabecalhoLink>
          <CabecalhoLink>
            <span className={styles.category}>Gatos</span>
          </CabecalhoLink>
          <CabecalhoLink>
            <span className={styles.category}>Cães</span>
          </CabecalhoLink>
          <CabecalhoLink>
            <span className={styles.category}>Outros</span>
          </CabecalhoLink>
        </div>
      </div>
    </div>
  );
}

export default Blog;
