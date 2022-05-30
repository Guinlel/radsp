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
    const radionucleide = radionucleides;

    const RenderInfo =  ()=>{
        if(!name){
            return <p></p>
        }else{
            return (
            <Box sx={{ minWidth : 275}}>
                <Card >{card}</Card>
            </Box>
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
    return <div className="home">
        {/* Fais la navette entre le component parent (ici) et l'enfant (choixRadio) */}
        <ChoixRadio tab={radionucleide} changeHandler={HandleChange} />
        <RenderInfo/>
    </div>
}

export default Home;