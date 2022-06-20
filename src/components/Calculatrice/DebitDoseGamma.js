import React from "react";
import { useState } from "react";
import Header from "../Header";

function CalcDebitDoseGamma (){
    const [act , setAct] = useState('');
    const [energie , setEnergie] = useState('');
    const [pourcEmission , setPourcEmission] = useState('');
    const [debit ,setDebit] = useState('');

    const calcul = ()=>{
        let debitDose = ((1.3*Math.pow(10,-10))* act * (energie*(pourcEmission/100)))
        setDebit(debitDose);
    }

    return(
        <div className="container">
            <Header/>
            <div className="card-calc-dose-gamma">
                <span className="disclaimer">⚠ Calculatrice applicable uniquement pour les rayonnements γ avec une Energie supérieur à 60 KeV </span>
                <label className="field-input">
                    <input type="number" onChange={(e) => setAct(e.target.value)} ></input>
                    <span className="placeholder">Activité (Bq)</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setEnergie(e.target.value)} ></input>
                    <span className="placeholder">Energie (MeV)</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setPourcEmission(e.target.value)} ></input>
                    <span className="placeholder">Pourcentage d'émission</span>
                </label>

                <label className="field-input">
                    <input type="number" value={debit} readOnly disabled ></input>
                    <span className="placeholder-debitDose">Débit de dose absorbée en rayonnement γ (mGY/h) </span>
                </label>

                <button className="button-valide" onClick={()=>calcul()}>Valider</button>

            </div>
        </div>
    )
}

export default CalcDebitDoseGamma