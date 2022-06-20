import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navigation from './components/Navigation';
import Conversion from './components/Calculatrice/Conversion';
import CalculDose from './components/Calculatrice/CalcDose';
import CalculPerim from './components/Calculatrice/CalcPerim';
import ActiviteRestante from './components/Calculatrice/ActRestante';
import Meteo from './components/Maps/Meteo';
import Accueil from './components/Accueil';
import Etiquette from './components/Etiquette';
import About from './components/About.js';
import CalcDebitDoseBeta from './components/Calculatrice/DebitDoseBeta';
import CalcDebitDoseGamma from './components/Calculatrice/DebitDoseGamma';
import MemoRad from './components/MemoRad.js';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/radionucleide" element={<Home/>}/>
                <Route path="/conversion" element={<Conversion/>} />
                <Route path="/calcul-dose" element={<CalculDose/>}/>
                <Route path='/calcul-dose-beta' element={<CalcDebitDoseBeta/>}/>
                <Route path='/calcul-dose-gamma' element={<CalcDebitDoseGamma/>}/>
                <Route path="/calcul-perimetre" element={<CalculPerim/>}/>
                <Route path="/activite-restante" element={<ActiviteRestante/>}/>
                <Route path="/etiquette" element={<Etiquette/>}/>
                <Route path="/meteo" element={<Meteo/>}/>
                <Route path="/a-propos" element={<About/>}/>
                <Route path="/memo-rad" element={<MemoRad/>}/>
                <Route path="*" element={
                    <main>
                        <Navigation/>
                        <p> Vous vous êtes perdu !!! </p>
                    </main>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;