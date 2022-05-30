import React, { useState } from "react";
import Navigation from "../Navigation";
import radionucleides from "../../ressources/Radio.json";
import { Button, TextField } from "@mui/material";

function CalculPerim() {
    // Création des hooks nécessaires
    const [doseDep, setDoseDep] = useState(0);
    const [distanceDep, setDistanceDep] = useState(0);
    const [doseVoulu, setDoseVoulu] = useState(0);
    const [perimetre, setPerimetre] = useState(0);
    const radionucleide = radionucleides;

    const CalculPerim = () => {
        // Formule permmettant de calculer la distance du périmètre voulu
        radionucleide.map((radio) => console.log(radio.name));
        setPerimetre((Math.sqrt((doseDep * Math.pow(distanceDep, 2)) / doseVoulu)))
    }

    return (
    <div className="info-calcul-perim">
        <Navigation />
        <TextField label="Dose de Départ" onChange={(e) => setDoseDep(e.target.value)}></TextField>
        <TextField label="Distance de départ" onChange={(e) => setDistanceDep(e.target.value)}></TextField>
        <TextField label="Dose voulu" onChange={(e) => setDoseVoulu(e.target.value)}></TextField>
        <TextField label="Périmètre recherché" value={perimetre} readOnly disabled></TextField>
        <Button variant="contained"onClick={() => CalculPerim()}>Validez !</Button>
    </div>
    )
}

export default CalculPerim;