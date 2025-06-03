
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Galeria from "pages/Galeria";
import PetDetalhes from "pages/PetDetalhes";
import Login from "Components/Login/Login"; // ✅ importe o Login
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter basename="/pet-resgate">
      <Routes>
        {/* ✅ Rota de login, sem cabeçalho, fora da PáginaBase */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Rotas com layout padrão, com cabeçalho etc */}
        <Route path="/" element={<PaginaBase />}>
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
