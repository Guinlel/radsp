import React, { useState } from "react";
import { Card, CardContent, Typography,Box } from "@mui/material";
import ChoixRadio from "./ComboBox";
import Navigation from "./Navigation";
import radionucleides from "../ressources/Radio.json";

function Home() {
    const [periode, setPeriode] = useState(null);
    const [unite, setUnite] = useState(null);
    const [name, setName] = useState(null);
    const [energie, setEnergie] = useState(null);
    const [emissionPrinc, setEmissionPrinc] = useState(null);
    const [emissionSecond, setEmissionSec] = useState(null);
    const [isActive , setActive] = useState('true');
    const radionucleide = radionucleides;

<<<<<<< HEAD
    const RenderInfo =  ()=>{
        if(!name){
            return <p></p>
        }else{
            return (
            <Box sx={{ minWidth : 275}}>
                <Card >{card}</Card>
            </Box>
=======
    const RenderInfo = () => {
        if (!name) {
            return <p>Selectioner une Element</p>
        } else {
            return(
            <div>
                <p className="card-title">{name}</p>
                <p>Periode : {periode + ' ' + unite }</p>
                <p className="card-title">Principales émissions : </p>
                <p> {emissionPrinc + ',' + emissionSecond}</p>
                <p className="card-title">Energies relachés :</p>
                <p>{energie}</p>
            </div>
>>>>>>> test-branch
            )
        };
    }

    const card = (
        <React.Fragment>
            <CardContent id="card-radio-info">
                <Typography sx={{fontSize: 16}} color="text.seconday">{name}</Typography>
                <Typography sx={{fontSize: 12}} color="text.seconday">Periode : {periode} {unite} </Typography>
                <Typography sx={{fontSize: 14}} variant="h5" color="text.seconday">Principale émissions : </Typography>   
                <Typography sx={{fontSize: 12}} color="text.seconday">{emissionPrinc}, {emissionSecond}</Typography> 
                <Typography sx={{fontSize: 14}} variant="h5" color="text.seconday">Energies relachés : </Typography>
                <Typography sx={{fontSize: 12}} color="text.seconday">{energie}</Typography>    
            </CardContent>
        </React.Fragment>
    )

    const HandleChange = (e) => {
        // Initialise la liste avec les données correspondant aux choix du select 
        var id = e;
        radionucleide.map((radio) => {
            if (id == radio.id) {
                setPeriode(radio.periode);
                setUnite(radio.unite);
                setName(radio.name);
                setEnergie(radio.energie);
                setEmissionPrinc(radio.emission.principale);
                setEmissionSec(radio.emission.secondaire);
            }
        }
        )
    }
<<<<<<< HEAD
    return <div className="home">
=======


    const handleActive = ()=>{
        setActive(!isActive);
    }
    
    return (
    <div className="home">
        <Navigation />
>>>>>>> test-branch
        {/* Fais la navette entre le component parent (ici) et l'enfant (choixRadio) */}
        <ChoixRadio className="choix-home" tab={radionucleide} changeActive={handleActive} changeHandler={HandleChange} />
        <div id="card-rad" className={isActive ? null : 'card-rad-hidden'} >         
            <RenderInfo />
        </div>
    </div>
    )
}

export default Home;