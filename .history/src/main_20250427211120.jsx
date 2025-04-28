import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrigi de 'react-router' para 'react-router-dom'

import App from './App.jsx'; // Login
import Home from './Home.jsx'; // Home page
import Registra from './Registrar.jsx'; // Registro
import AuthMiddleware from './middleware.jsx'; // Se precisar de proteção de rotas

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota de Home */}
        <Route path="/" element={<Home />} />
        
        {/* Rota de Login */}
        <Route path="/login" element={<App />} />
        
        {/* Rota de Registro */}
        <Route path="/registrar" element={<Registra />} />
        
        {/* Se tiver middleware de proteção de rota, pode adicionar aqui */}
        {/* Exemplo de rotas protegidas */}
        {/* <Route element={<AuthMiddleware />}> */}
        {/*   <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* </Route> */}
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
