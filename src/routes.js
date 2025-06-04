import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Galeria from "pages/Galeria";
import PetDetalhes from "pages/PetDetalhes";
import Login from "pages/Login";
import SobreProjeto from "pages/SobreProjeto";
import FaleConosco from "pages/FaleConosco";
import Blog from "pages/Blog";
import Perfil from "pages/Perfil";
import Cadastro from "pages/Cadastro";
import Resgate from "pages/Resgate";

function AppRoutes() {
  return (
    <BrowserRouter basename="/pet-resgate">
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="adote" element={<Galeria />} />
          <Route path="resgate" element={<Resgate />} />
          <Route path="pet/:id" element={<PetDetalhes />} />
          <Route path="sobre" element={<SobreProjeto />} />
          <Route path="ajuda" element={<FaleConosco />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
