import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Galeria from "pages/Galeria";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetDetalhes from "pages/PetDetalhes";
import SobreProjeto from "pages/SobreProjeto";
import FaleConosco from "pages/FaleConosco";

function AppRoutes() {
  return (
    <BrowserRouter basename="/pet-resgate">
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="galeria" element={<Galeria />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path="pet/:id" element={<PetDetalhes />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
          <Route path="sobre" element={<SobreProjeto />}></Route>
          <Route path="ajuda" element={<FaleConosco />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
