import React from "react";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Materiais from "./pages/Materiais";
import Referencias from "./pages/Referencias";
import Sobre from "./pages/Sobre";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Materiais" element={<Materiais/>} />
            <Route path="/Produto" element={<Produto/>} />
            <Route path="/Referencias" element={<Referencias/>} />
            <Route path="/Sobre" element={<Sobre/>} />
         </Routes>
      </BrowserRouter>
   );
}
export default App;