import React, {  useState } from "react";
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
    const [uniteRestant , setUniteRestant] = useState('');
    const radionucleide = radionucleides;
    const input = document.getElementsByClassName("input");

    const timeLeft = ()=>{
        let periodeRestante = tmps/periode
        let duree
        if(unite ==='jours'){
            duree = ((10 - periodeRestante)*periode);
            setUniteRestant('jours');
            setDureeRestante(duree.toFixed(0));
        } else{
            duree = ((10 - periodeRestante)*periode)/60;
            setUniteRestant('heures');
            setDureeRestante(duree.toFixed(2));
        }   
        
    }
    function CalculAct() {
        //Première partie du calcul permettant de connaître l'activité restante (temps divise par la période)
        var tempsPer = tmps / periode;
        // Deuxiéme partie du calcul qui consiste à diviser l'activité initial par 2^(temps/periode)
        setActRes(actIni / Math.pow(2, tempsPer))
        timeLeft();
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
        for(var i=0; i<input.length;i++){
            input[i].value="";
        }
        setActRes("");    
    }

    return <div className="activite-restante">
        <Header/>
        <div className="activite-content">
        <ChoixRadio filter="yes" tab={radionucleide} changeHandler={HandleChange} />
            <label className="field-input">
                <input className="input"  type="number" onChange={(e) => setActIni(e.target.value)}></input>
                <span className="placeholder">Activité Initiale</span>
            </label>
            
            <label className="field-input">
                <input type="number" value={periode} onChange={(e) => setPeriode(e.target.value)}></input>
                <span className="placeholder">{"Période : " + unite}</span>
            </label>

            <label className="field-input">
                
                <input className="input"  type="number" onChange={(e) => setTmps(e.target.value)}></input>
                <span className="placeholder">{"Temps écoulé en " + unite}</span>
            </label>

            <label className="field-input">
                <input className="input"  type="number" value={actRes} disabled readOnly ></input>
                <span>Activité restante</span>
            </label>

            <p>{"Temps restants d'activité : " +  dureeRestante + " " + uniteRestant}</p>

            <button className="button-valide" onClick={() => CalculAct()}>Valider</button>
        </div>    
    </div>
}

export default ActiviteRestante;