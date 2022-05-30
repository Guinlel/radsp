import { Button, TextField } from "@mui/material";
import React from "react";
import {useState} from "react";
import MenuBurger from "../MenuBurger";
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
            <TextField sx={{maxWidth: 300, marginTop: 1}} label="Dose mesuré" onChange={(e)=> setDoseM(e.target.value)}></TextField>
            <HandleUnite HandleChange={HandleChangeUnite}/>
            <TextField sx={{maxWidth: 300, marginTop: 1}} label="Distance dose mesuré (m)" onChange={(e)=> setDistanceInc(e.target.value) }></TextField>
            <TextField sx={{maxWidth: 300, marginTop: 1}}  label="Distance dose recherché (m)" onChange={(e)=> setDistMes(e.target.value)}></TextField>
            <TextField sx={{maxWidth: 300, marginTop: 1}}  label="Dose recherché" value={doseRech +" "+ unite } readOnly disabled></TextField>
            <Button sx={{maxWidth: 100, marginTop: 1 , marginLeft: 11}}  variant="contained" onClick={()=>Calcul()}>Validez ! </Button>
        </div>
    )
}
export default CalculDose; 