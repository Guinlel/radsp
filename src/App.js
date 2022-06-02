import './App.css';
import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navigation from './components/Navigation';
import Conversion from './components/Calculatrice/Conversion';
import CalculDose from './components/Calculatrice/CalcDose';
import CalculPerim from './components/Calculatrice/CalcPerim';
import ActiviteRestante from './components/Calculatrice/ActRestante';
import Meteo from './components/Maps/Meteo';

function App() {
    
    const element = (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/conversion" element={<Conversion/>} />
                <Route path="/calcul-dose" element={<CalculDose/>}/>
                <Route path="/calcul-perimetre" element={<CalculPerim/>}/>
                <Route path="/activite-restante" element={<ActiviteRestante/>}/>
                <Route path="/meteo" element={<Meteo/>}/>
                <Route path="*" element={
                    <main>
                        <Navigation/>
                        <p> Vous vous êtes perdu !!! </p>
                    </main>
                } />
            </Routes>
        </BrowserRouter>
    )
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(element);
}

export default App;