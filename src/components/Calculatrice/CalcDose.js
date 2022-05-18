import React from "react";
import {useState} from "react";
import Navigation from "../Navigation";
import HandleUnite from "./HandleUnit";


function CalculDose(){
    //Création des hooks
    const [doseRech, setDoseRech] = useState(0);
    const [doseMes, setDoseM] = useState(0);
    const [distanceMes, setDistMes] = useState(0);
    const [distanceInc, setDistanceInc] = useState(0);
    const [unite , SetUnite] = useState("");

    function Calcul(){  
        // Formule qui permet de connaitre la dose reçu en fonction de la dose de départ à une distance précise et de la distance de la 2ème dose 
        setDoseRech((doseMes*Math.pow(distanceInc,2))/Math.pow(distanceMes,2));

    }

    const HandleChangeUnite = (props) =>{
        SetUnite(props);
    }

    return(
        <div className="info-calcul-dose">
            <Navigation/>      
            <h2> Dose mesuré </h2>
            <input type="texte"onChange={(e)=> setDoseM(e.target.value)} ></input><HandleUnite HandleChange={HandleChangeUnite}/>
            <h2>Distance de la dose mesuré par rapport à l'incident (m)</h2>
            <input type="texte"onChange={(e)=> setDistanceInc(e.target.value) } ></input>
            <h2>Distance de la dose recherché (m)</h2> 
            <input type="texte" onChange={(e)=> setDistMes(e.target.value) } ></input>
            <h2>Dose recherché :</h2>
            <input type="texte"  value={doseRech} readOnly disabled></input> <p>{unite}</p>
            <button onClick={()=>Calcul()} >Validez ! </button>
        </div>
    )
}
export default CalculDose;