import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navegation } from './components/navegation/navegation.jsx';
import { PageHome } from './page/home/home.jsx';
import { PagePolitica } from './page/politica/politica.jsx';
import { PageDeporte } from './page/deporte/deporte.jsx';
import { Page404 } from './page/error/404.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageHome/>
            }
          />
          <Route
            path="/politica"
            element={
              <PagePolitica/>
            }
          />
          <Route
            path="/deporte"
            element={
              <PageDeporte/>
            }
          />
          <Route path="*" element={
            <Page404/>
          } 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
