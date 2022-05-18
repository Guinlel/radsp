import React, { useState } from "react";
import Navigation from "../Navigation";
import radionucleides from "../../ressources/Radio.json";
import ChoixRadio from "../ComboBox";

function CalculPerim() {
    // Création des hooks nécessaires
    const [doseDep, setDoseDep] = useState(0);
    const [distanceDep, setDistanceDep] = useState(0);
    const [doseVoulu, setDoseVoulu] = useState(0);
    const [perimetre, setPerimetre] = useState(0);
    const [periode, setPeriode] = useState(0);
    const radionucleide = radionucleides;
    const paraPeriode = document.getElementById('periode');
    const innerDose = document.getElementById("doseDepart");

    const HandleChange = (e) => {
        var id = e;
        radionucleide.map((radio) => {
            if (id == radio.id) {
                console.log(radio.periode);
                setPeriode(radio.periode);
            }
        }
        )

    }
    const CalculPerim = () => {
        // Formule permmettant de calculer la distance du périmètre voulu
        radionucleide.map((radio) => console.log(radio.name));
        setPerimetre((Math.sqrt((doseDep * Math.pow(distanceDep, 2)) / doseVoulu)))
    }

    return <div className="info-calcul-perim">
        <Navigation />
        <ChoixRadio tab={radionucleide} changeHandler={HandleChange} />
        <h2> Dose de départ</h2>
        <input type="texte" id="doseDepart" onChange={(e) => setDoseDep(e.target.value)}></input>
        <h2>Distance de départ</h2>
        <input type="texte" onChange={(e) => setDistanceDep(e.target.value)}></input>
        <h2>Dose voulu </h2>
        <input type="texte" onChange={(e) => setDoseVoulu(e.target.value)}></input>
        <h2>Périmètre recherché</h2>
        <input type="texte" value={perimetre} readOnly disabled></input>
        <button onClick={() => CalculPerim()}>Validez !</button>
    </div>
}

export default CalculPerim;