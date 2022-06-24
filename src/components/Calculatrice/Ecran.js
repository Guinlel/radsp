import React from "react";
import { useState } from "react";
import Header from "../Header";

function Ecran() {
    const [debitDoseIni, setDebitDoseIni] = useState(null);
    const [ecranDemi, setEcranDemi] = useState(null);
    const [ecranDixieme, setEcranDixieme] = useState(null);
    const [debitResiduel, setDebitResiduel] = useState("");

    const calcul = () => {
        // 
        if (ecranDemi && ecranDixieme) {
            setDebitResiduel((debitDoseIni / Math.pow(2, ecranDemi))/Math.pow(10, ecranDixieme));
        } else if (ecranDemi) {
            setDebitResiduel((debitDoseIni / Math.pow(2, ecranDemi)));
        } else {
            console.log((debitResiduel / Math.pow(10, ecranDixieme)));
            setDebitResiduel((debitDoseIni / Math.pow(10, ecranDixieme)));
        }
    }

    return (
        <div className="container">
            <Header />
            <div className="card-ecran">

                <label className="field-input">
                    <input type="number" onChange={(e) => setDebitResiduel("") + setDebitDoseIni(e.target.value)}></input>
                    <span className="placeholder">Débit de dose initial</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setDebitResiduel("") + setDebitResiduel("") + setEcranDemi(e.target.value)}></input>
                    <span className="placeholder">Nombre d'écran 1/2</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) =>setDebitResiduel("") + setEcranDixieme(e.target.value)}></input>
                    <span className="placeholder">Nombre d'écran 1/10</span>
                </label>

                <label className="field-input">
                    <input type="number" value={debitResiduel} readOnly disabled></input>
                    <span className="placeholder">Débit de dose résiduel</span>
                </label>

                <button className="button-valide" onClick={calcul}>Valider</button>

            </div>
        </div>
    )
}

export default Ecran;