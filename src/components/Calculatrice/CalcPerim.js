import React, { useState } from "react";
import Navigation from "../Navigation";
import radionucleides from "../../ressources/Radio.json";

function CalculPerim() {
    // Création des hooks nécessaires
    const [doseDep, setDoseDep] = useState(0);
    const [distanceDep, setDistanceDep] = useState(0);
    const [doseVoulu, setDoseVoulu] = useState(0);
    const [perimetre, setPerimetre] = useState('');
    const radionucleide = radionucleides;

    const CalculPerim = () => {
        // Formule permmettant de calculer la distance du périmètre voulu
        radionucleide.map((radio) => console.log(radio.name));
        setPerimetre((Math.sqrt((doseDep * Math.pow(distanceDep, 2)) / doseVoulu)))
    }

    return (
        <div className="container">
            <Navigation />
            <div className="card-calcul-perim">
                <label className="field-input">
                    <input type="number" id="doseDepart" onChange={(e) => setDoseDep(e.target.value)}></input>
                    <span className="placeholder">Dose de départ</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setDistanceDep(e.target.value)}></input>
                    <span className="placeholder">Distance de départ</span>
                </label>

                <label className="field-input">
                    <input type="number" onChange={(e) => setDoseVoulu(e.target.value)}></input>
                    <span className="placeholder">Dose voulu</span>
                </label>

                <label className="field-input">
                    <input type="number" value={perimetre} readOnly disabled></input>
                    <span className="placeholder">Périmètre recherché</span>
                </label>

                <button className="button-valide" onClick={() => CalculPerim()}>Validez !</button>
            </div>

        </div>

    )
}

export default CalculPerim;