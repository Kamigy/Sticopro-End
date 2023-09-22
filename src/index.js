import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./routes/App.tsx";
import Stats from "./routes/Stats.tsx";
import AddCard from "./routes/AddCard";
import LogIn from "./routes/LogIn";
import OnBoarding from "./routes/OnBoarding";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp.tsx";
import Unknown from "./routes/Unknown"
import Flash from "./routes/Flash";
import Search from "./routes/Search";
import Profile from "./routes/Profile";
import Establishment from "./routes/Establishment";
import Advice from "./routes/Advice";
import { Footer } from './layouts/Footer';
import { AuthProvider } from "./components/AuthContext";

// Attributs
const app = ReactDOM.createRoot(document.getElementById('app'));

// Routes
app.render(
<>
  <React.StrictMode> 
  <AuthProvider>
    <BrowserRouter> 
        <Routes>
          {/* Default Website Route */}
          <Route path="/" element={<App title="Sticopro | Passion Vin : Culture et convivialité"/>} >

            {/* New Website Routes */}
            <Route path="/" element={<OnBoarding title="Sticopro | Passion Vin : Culture et convivialité"/>}  />
            <Route path="/signup" element={<SignUp title="Sticopro - Inscription"/>}  />
            <Route path="/login" element={<LogIn title="Sticopro - Connexion"/>}  />

            {/* Routes */}
            <Route path="/home" element={<Home title="Sticopro - Accueil"/>}  />
            <Route path="/addcard" element={<AddCard title="Sticopro - Ajout d'une carte"/>}  />
            <Route path="/stats" element={<Stats title="Sticopro - Dashboard"/>}  />
            <Route path="/flash" element={<Flash title="Sticopro - Flash un QR Code"/>}  />
            <Route path="/search" element={<Search title="Sticopro - Recherche"/>}  />
            <Route path="/profile" element={<Profile title="Sticopro - Profil"/>}  />
            <Route path="/establishment" element={<Establishment title="Sticopro - Etablissement"/>}  />
            <Route path="/advice/:id?" element={<Advice title="Sticopro - Conseil"/>}  />

            {/* Unknow Routes */}
            <Route path="/404" element={<Unknown title="Sticopro - 404"/>} />
            <Route path='/*' element={<Navigate replace to="/404"/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </AuthProvider>
  </React.StrictMode>
</>
);
