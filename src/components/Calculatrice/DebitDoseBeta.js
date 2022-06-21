import { useState } from "react";
import React from "react";
import Header from "../Header";

function CalcDebitDoseBeta() {
    const [act, setAct] = useState('');
    const [pourcEmission, setPourcentEmiss] = useState('');
    const [debit, setDebit] = useState('');

    const calcul = () => {
        console.log(Math.pow(9.7,-7));
        let debitDose = ((9.7*Math.pow(10, -7)) * act * (pourcEmission / 100));
        setDebit(debitDose);
    }

    return (
        <div className="container">
            <Header />
            <div className="card-calc-dose-beta">
                <span className="disclaimer">⚠ Calculatrice applicable uniquement pour les rayonnements β avec une Energie supérieur à 300 KeV pour une distance de 10cm</span>
                <label className="field-input">
                    <input type="number" onChange={(e) => setAct(e.target.value)}></input>
                    <span className="placeholder">Activité (Bq)</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setPourcentEmiss(e.target.value)}></input>
                    <span className="placeholder">Pourcentage d'émissions</span>
                </label>

                <label className="field-input">
                    <input type="number" value={debit} readOnly disabled></input>
                    <span className="placeholder-debitDose">Débit de dose absorbée en rayonnement β (mGY/h)</span>
                </label>
                <button className="button-valide" onClick={()=>calcul()}>Valider</button>
            </div>
        </div>
    )
}

export default CalcDebitDoseBeta
