import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import ChoixRadio from "../ComboBox";
import radionucleides from "../../ressources/Radio.json";
import MenuBurger from "../MenuBurger";


function ActiviteRestante() {
    const [actIni, setActIni] = useState(0);
    const [periode, setPeriode] = useState('');
    const [tmps, setTmps] = useState(0);
<<<<<<< HEAD
    const [actRes, setActRes] = useState(0);
    const [unite, setUnite] = useState('');
=======
    const [actRes, setActRes] = useState('');
    const [unite, setUnite] = useState("");
>>>>>>> test-branch
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
<<<<<<< HEAD
        <ChoixRadio tab={radionucleide} changeHandler={HandleChange} />
        <TextField sx={{marginTop: 1 ,maxWidth: 300}} label="Activite initial" onChange={(e) => setActIni(e.target.value)}></TextField>
        <TextField sx={{marginTop: 1, maxWidth: 300}} label={"Periode"+" ("+unite+")"} value={periode} controlled="true" onChange={(e) => setPeriode(e.target.value)} controlled></TextField>
        <TextField sx={{marginTop: 1, maxWidth: 300}} label="Temps écoulé" onChange={(e) => setTmps(e.target.value)}></TextField>
        <TextField sx={{marginTop: 1, maxWidth: 300}} label="Activité restante" value={actRes || ''} readOnly disabled></TextField>
        <Button sx={{marginTop: 1, maxWidth: 100}} variant="contained" onClick={() => CalculAct()}>Validez </Button>
=======
        <Navigation />
        <div className="activite-content">
        <ChoixRadio tab={radionucleide} changeHandler={HandleChange} />
            <label className="field-input">
                <input type="texte" onChange={(e) => setActIni(e.target.value)}></input>
                <span className="placeholder">Activite Initial</span>
            </label>
            
            <label className="field-input">
                <input type="texte" value={periode + ' ' + unite} onChange={(e) => setPeriode(e.target.value)}></input>
                <span className="placeholder">Periode</span>
            </label>

            <label className="field-input">
                <input type="texte" onChange={(e) => setTmps(e.target.value)}></input>
                <span className="placeholder">Temps écoulé</span>
            </label>

            <label className="field-input">
                <input type="texte" value={actRes} disabled readOnly ></input>
                <span>Activité restante</span>
            </label>

            <button className="button-valide" onClick={() => CalculAct()}>Validez</button>
        </div>    
>>>>>>> test-branch
    </div>
}

export default ActiviteRestante;