import React, { useState } from "react";
import Header from "../Header";

function CalculPerim() {
    // Création des hooks nécessaires
    const [doseDep, setDoseDep] = useState(0);
    const [distanceDep, setDistanceDep] = useState(0);
    const [doseVoulu, setDoseVoulu] = useState(0);
    const [perimetre, setPerimetre] = useState('');

    const CalculPerim = () => {
        // Formule permmettant de calculer la distance du périmètre voulu
        setPerimetre((Math.sqrt((doseDep * Math.pow(distanceDep, 2)) / doseVoulu)))
    }

    return (
        <div className="container">
            <Header/>
            <div className="card-calcul-perim">
                <label className="field-input">
                    <input type="number" id="doseDepart" onChange={(e) => setDoseDep(e.target.value)}></input>
                    <span className="placeholder">Dose de départ</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setDistanceDep(e.target.value)}></input>
                    <span className="placeholder">Distance dose de départ</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setDoseVoulu(e.target.value)}></input>
                    <span className="placeholder">Dose recherchée</span>
                </label>

                <label className="field-input">
                    <input type="number" value={perimetre} readOnly disabled></input>
                    <span className="placeholder">Résultat : distance calculée</span>
                </label>

                <button className="button-valide" onClick={() => CalculPerim()}>Valider</button>
            </div>

        </div>

    )
}

export default CalculPerim;