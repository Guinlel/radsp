import React, { useState } from "react";
import Navigation from "../Navigation";
import radionucleides from "../../ressources/Radio.json";
import { Button, TextField } from "@mui/material";
import MenuBurger from "../MenuBurger";

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
<<<<<<< HEAD
    <div className="info-calcul-perim">
        <TextField sx={{maxWidth: 300 , marginTop: 1}} label="Dose de Départ" onChange={(e) => setDoseDep(e.target.value)}></TextField>
        <TextField sx={{maxWidth: 300 , marginTop: 1}}  label="Distance de départ" onChange={(e) => setDistanceDep(e.target.value)}></TextField>
        <TextField sx={{maxWidth: 300 , marginTop: 1}}  label="Dose voulu" onChange={(e) => setDoseVoulu(e.target.value)}></TextField>
        <TextField sx={{maxWidth: 300 , marginTop: 1}}  label="Périmètre recherché" value={perimetre} readOnly disabled></TextField>
        <Button sx={{maxWidth: 100 , marginTop:2 , marginLeft: 11}} variant="contained"onClick={() => CalculPerim()}>Validez !</Button>
    </div>
=======
        <div className="container">
            <Navigation />
            <div className="card-calcul-perim">
                <label className="field-input">
                    <input type="texte" id="doseDepart" onChange={(e) => setDoseDep(e.target.value)}></input>
                    <span className="placeholder">Dose de départ</span>
                </label>

                <label className="field-input">
                    <input type="texte" onChange={(e) => setDistanceDep(e.target.value)}></input>
                    <span className="placeholder">Distance de départ</span>
                </label>

                <label className="field-input">
                    <input type="texte" onChange={(e) => setDoseVoulu(e.target.value)}></input>
                    <span className="placeholder">Dose voulu</span>
                </label>

                <label className="field-input">
                    <input type="texte" value={perimetre} readOnly disabled></input>
                    <span className="placeholder">Périmètre recherché</span>
                </label>

                <button className="button-valide" onClick={() => CalculPerim()}>Validez !</button>
            </div>

        </div>

>>>>>>> test-branch
    )
}

export default CalculPerim;