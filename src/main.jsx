import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import Home from "./pages/Home";
import SeguroCoche from "./pages/SeguroCoche";
import SeguroHogar from "./pages/SeguroHogar";
import SeguroSalud from "./pages/SeguroSalud";
import SeguroVida from "./pages/SeguroVida";
import SeguroMascotas from "./pages/SeguroMascotas";
import EmpresasAutonomos from "./pages/EmpresasAutonomos";
import TransporteMercancia from "./pages/TransporteMercancia";
import Blog from "./pages/Blog";
import ArticuloSeguroCoche from "./pages/ArticuloSeguroCoche";
import ArticuloSeguroCocheTodoRiesgoTerceros from "./pages/ArticuloSeguroCocheTodoRiesgoTerceros";
import ArticuloSeguroHogar from "./pages/ArticuloSeguroHogar";
import ArticuloSeguroSalud from "./pages/ArticuloSeguroSalud";
import ArticuloSeguroVida from "./pages/ArticuloSeguroVida";
import ArticuloSeguroMascotas from "./pages/ArticuloSeguroMascotas";
import ArticuloSeguroGatos from "./pages/ArticuloSeguroGatos";
import ArticuloAutonomos from "./pages/ArticuloAutonomos";
import ArticuloSeguroTransporte from "./pages/ArticuloSeguroTransporte";
import ArticuloSeguroMedicoFamiliar from "./pages/ArticuloSeguroMedicoFamiliar";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { AuthProvider } from "./context/AuthContext";
import RutaProtegida from "./components/RutaProtegida";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import ClienteLogin from "./pages/ClienteLogin";
import CrearContrasena from "./pages/CrearContrasena";
import ClientePanel from "./pages/ClientePanel";
import RutaProtegidaCliente from "./components/RutaProtegidaCliente";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/seguro-coche" element={<SeguroCoche />} />
        <Route path="/seguro-hogar" element={<SeguroHogar />} />
        <Route path="/seguro-salud" element={<SeguroSalud />} />
        <Route path="/seguro-vida" element={<SeguroVida />} />
        <Route path="/seguro-mascotas" element={<SeguroMascotas />} />
        <Route path="/empresas-autonomos" element={<EmpresasAutonomos />} />
        <Route
          path="/transporte-mercancia"
          element={<TransporteMercancia />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/como-elegir-seguro-coche-2026"
          element={<ArticuloSeguroCoche />}
        />
        <Route
          path="/blog/seguro-coche-todo-riesgo-vs-terceros"
          element={<ArticuloSeguroCocheTodoRiesgoTerceros />}
        />
        <Route
          path="/blog/que-cubre-realmente-un-seguro-de-hogar"
          element={<ArticuloSeguroHogar />}
        />
        <Route
          path="/blog/seguro-salud-con-copago-o-sin-copago"
          element={<ArticuloSeguroSalud />}
        />
        <Route
          path="/blog/merece-la-pena-contratar-un-seguro-de-vida"
          element={<ArticuloSeguroVida />}
        />
        <Route
          path="/blog/seguro-para-perros-que-debes-tener-en-cuenta"
          element={<ArticuloSeguroMascotas />}
        />
        <Route
          path="/blog/seguro-para-gatos-que-debes-tener-en-cuenta"
          element={<ArticuloSeguroGatos />}
        />
        <Route
           path="/blog/seguros-para-autonomos"
           element={<ArticuloAutonomos />}
        />
        <Route
           path="/blog/seguro-transporte-mercancia-todo-lo-que-necesitas-saber"
           element={<ArticuloSeguroTransporte />}
        />
        <Route
           path="/blog/seguro-medico-familiar-como-elegir-el-mejor-plan"
           element={<ArticuloSeguroMedicoFamiliar />}
        />

        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />

        <Route path="/panel/login" element={<AdminLogin />} />
        <Route
          path="/panel"
          element={
            <RutaProtegida>
              <AdminPanel />
            </RutaProtegida>
          }
        />

        <Route path="/mi-cuenta" element={<ClienteLogin />} />
        <Route path="/crear-contrasena" element={<CrearContrasena />} />
        <Route
          path="/mi-cuenta/polizas"
          element={
            <RutaProtegidaCliente>
              <ClientePanel />
            </RutaProtegidaCliente>
          }
        />
      </Routes>

      <CookieConsentBanner />
    </BrowserRouter>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);