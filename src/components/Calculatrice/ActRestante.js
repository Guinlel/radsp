import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Input } from "@mui/material";
import ChoixRadio from "../ComboBox";
import Navigation from "../Navigation";
import radionucleides from "../../ressources/Radio.json";


function ActiviteRestante() {
    const [actIni, setActIni] = useState(0);
    const [periode, setPeriode] = useState(0);
    const [tmps, setTmps] = useState(0);
    const [actRes, setActRes] = useState(0);
    const [unite, setUnite] = useState("");
    const radionucleide = radionucleides;

    function CalculAct() {
        //Première partie du calcul permettant de connaître l'activité restante (temps divise par la période)
        var tempsPer = tmps / periode;
        // Deuxiéme partie du calcul qui consiste à diviser l'activité initial par 2^(temps/periode)
        setActRes(actIni / Math.pow(2, tempsPer))
    }

    const HandleChange = (e) => {
        var id = e;
        radionucleide.map((radio) => {
            if (id == radio.id) {
                console.log(radio.periode);
                setPeriode(radio.periode);
                setUnite(radio.unite);
            }
        }
        )
    }

    return <div className="activite-restante">
        <Navigation />
        <ChoixRadio tab={radionucleide} changeHandler={HandleChange} />
        <TextField label="Activite initial" onChange={(e) => setActIni(e.target.value)}></TextField>
        <TextField  label={"Periode"+" ("+unite+")"} value={periode} onChange={(e) => setPeriode(e.target.value)} ></TextField>
        <TextField label="Temps écoulé" onChange={(e) => setTmps(e.target.value)}></TextField>
        <TextField label="Activité restante" value={actRes} readOnly disabled></TextField>
        <Button variant="contained" onClick={() => CalculAct()}>Validez </Button>
    </div>
}

export default ActiviteRestante;