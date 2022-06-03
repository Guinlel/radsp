import React, { useEffect, useState } from "react";
import ChoixRadio from "../ComboBox";
import radionucleides from "../../ressources/Radio.json";
import Header from "../Header";


function ActiviteRestante() {
    const [actIni, setActIni] = useState(0);
    const [periode, setPeriode] = useState('');
    const [tmps, setTmps] = useState(0);
    const [actRes, setActRes] = useState('');
    const [unite, setUnite] = useState("");
    const [ dureeRestante , setDureeRestante] = useState('');
    const radionucleide = radionucleides;

    useEffect(()=>{
        let periodeRestante = tmps/periode
        let duree = ((10 - periodeRestante)*periode)/60
        setDureeRestante(duree.toFixed(2));
    })

    function CalculAct() {
        //Première partie du calcul permettant de connaître l'activité restante (temps divise par la période)
        var tempsPer = tmps / periode;
        // Deuxiéme partie du calcul qui consiste à diviser l'activité initial par 2^(temps/periode)
        setActRes(actIni / Math.pow(2, tempsPer))
    }

    const HandleChange = (e) => {
        var id = e;
        // eslint-disable-next-line
        radionucleide.map((radio) => {
            // eslint-disable-next-line
            if (id  == radio.id) {
                console.log(radio.periode);
                setPeriode(radio.periode);
                setUnite(radio.unite);
            }
        }
        )
    }

    return <div className="activite-restante">
        <Header/>
        <div className="activite-content">
        <ChoixRadio filter="yes" tab={radionucleide} changeHandler={HandleChange} />
            <label className="field-input">
                <input type="number" onChange={(e) => setActIni(e.target.value)}></input>
                <span className="placeholder">Activité Initiale</span>
            </label>
            
            <label className="field-input">
                <input type="texte" value={periode + ' ' + unite} onChange={(e) => setPeriode(e.target.value)}></input>
                <span className="placeholder">Période</span>
            </label>

            <label className="field-input">
                <input type="number" onChange={(e) => setTmps(e.target.value)}></input>
                <span className="placeholder">Temps écoulé</span>
            </label>

            <label className="field-input">
                <input type="number" value={actRes} disabled readOnly ></input>
                <span>Activité restante</span>
            </label>

            <p>{"Temps restants d'activité : " +  dureeRestante +"h"}</p>

            <button className="button-valide" onClick={() => CalculAct()}>Validez</button>
        </div>    
    </div>
}

export default ActiviteRestante;