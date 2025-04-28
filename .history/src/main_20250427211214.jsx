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
       
        <Route path="/" element={<Home />} />
        
       
        <Route path="/login" element={<App />} />
        
        
        <Route path="/registrar" element={<Registra />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
