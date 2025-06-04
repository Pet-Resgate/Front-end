import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Galeria from "pages/Galeria";
import PetDetalhes from "pages/PetDetalhes";
import Login from "Components/Login";
import SobreProjeto from "pages/SobreProjeto";
import FaleConosco from "pages/FaleConosco";
import Blog from "pages/Blog";

function AppRoutes() {
  return (
    <BrowserRouter basename="/pet-resgate">
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Inicio />}></Route>
          <Route path="galeria" element={<Galeria />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path="pet/:id" element={<PetDetalhes />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
          <Route path="sobre" element={<SobreProjeto />}></Route>
          <Route path="ajuda" element={<FaleConosco />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route index element={<Inicio />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="pet/:id" element={<PetDetalhes />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
