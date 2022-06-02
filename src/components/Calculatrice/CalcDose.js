import React from "react";
import { useState } from "react";
import Navigation from "../Navigation";
import HandleUnite from "./HandleUnit";


function CalculDose() {
    //Création des hooks
    const [doseRech, setDoseRech] = useState('');
    const [doseMes, setDoseM] = useState(0);
    const [distanceMes, setDistMes] = useState(0);
    const [distanceInc, setDistanceInc] = useState(0);
    const [unite, SetUnite] = useState("");

    function Calcul() {
        // Formule qui permet de connaitre la dose reçu en fonction de la dose de départ à une distance précise et de la distance de la 2ème dose 
        setDoseRech((doseMes * Math.pow(distanceInc, 2)) / Math.pow(distanceMes, 2));

    }

    const HandleChangeUnite = (props) => {
        SetUnite(props);
    }

    return (
        <div className="container">
            <Navigation />
            <div className="card-calc-dose">

                <label className="field-input">
                    <input type="texte" onChange={(e) => setDoseM(e.target.value)}></input>
                    <span className="placeholder">Dose mesuré</span>
                </label>

                <HandleUnite HandleChange={HandleChangeUnite} />

                <label className="field-input">
                    <input type="texte" onChange={(e) => setDistanceInc(e.target.value)} ></input>
                    <span className="placeholder">Distante de la dose mesuré (m)</span>
                </label>

                <label className="field-input">
                    <input type="texte" onChange={(e) => setDistMes(e.target.value)} ></input>
                    <span className="placeholder">Distance de la dose recherché</span>
                </label>

                <label className="field-input">
                    <input type="texte" value={doseRech + ' ' + unite} readOnly disabled></input>
                    <span className="placeholder">Dose recherché</span>
                </label>

                <button className="button-valide" onClick={() => Calcul()} >Validez ! </button>
            </div>
        </div>
    )
}
export default CalculDose;