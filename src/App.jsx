// eslint-disable-next-line no-unused-vars
import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Sanciones from './components/Sanciones'
import Tarifas from './components/Tarifas'


import "./App.css"
import Accidente from './components/Accidente'
import Huapaltepec from './components/Huapaltepec'
import NoTirarBasura from './components/NoTirarBasura'
import Tepepan from './components/Tepepan'
import SanMiguel from './components/SanMiguel'
import Telefonos from './components/Telefonos';
import TarjetasInformativas from './components/TarjetasInformativas';
import Tiempos from './components/Tiempos';
import Virgen from './components/Virgen';
import Puerto from './components/Puerto';
import Antorcha from './components/Antorcha';
import CristoRey from './components/CristoRey';

function App() {

  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Sanciones />} />
            <Route path="/tarifas" element={<Tarifas />} />
            <Route path="/accidente" element={<Accidente />} />
            <Route path="/huapaltepec" element={<Huapaltepec />} />
            <Route path="/basura" element={<NoTirarBasura />} />
            <Route path="/tepepan" element={<Tepepan />} />
            <Route path="/sanmiguel" element={<SanMiguel />} />
            <Route path="/telefonos" element={<Telefonos />} />
            <Route path="/tarjetas" element={<TarjetasInformativas />} />
            <Route path="/tiempos" element={<Tiempos />} />
            <Route path="/virgen" element={<Virgen />} />
            <Route path="/puerto" element={<Puerto />} />
            <Route path="/antorcha" element={<Antorcha />} />
          <Route path="/cristo" element={<CristoRey />} />
          </Routes>
        </div>
    </HashRouter>
  );
  /* return (
    <>
      <Sanciones></Sanciones>
      <hr></hr>
      <Tarifas></Tarifas>
      <hr></hr>
      
      <hr></hr>
      
      <hr></hr>
      <Accidente></Accidente>
      <hr></hr>
      <Huapaltepec></Huapaltepec>
      <hr></hr>
      <Tepepan></Tepepan>
      <hr></hr>
      <SanMiguel></SanMiguel>
      <hr></hr>
      <NoTirarBasura></NoTirarBasura>
    </>
  ) */
}

export default App
