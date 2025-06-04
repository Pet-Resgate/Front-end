<<<<<<< HEAD
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
=======
import Cabecalho from "Components/Cabecalho";
import Container from "Components/Container/Container";
import Rodape from "Components/Rodape";
>>>>>>> e63cb4e4adebba1a7e90623e624daa6e88a9a4fe
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Outlet />
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
