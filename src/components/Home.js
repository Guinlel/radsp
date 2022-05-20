import React, { useState } from "react";
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
            return <ul>
            <p>Nom :</p><li>{name}</li>
            <p>Période :</p><li>{periode} {unite}</li>
            <p>Principales émissions : </p><li>{emissionPrinc}, {emissionSecond}</li>
            <p>Energies relachés :</p> <li>{energie}</li>

        </ul>
        };
    }

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
        <Navigation />
        {/* Fais la navette entre le component parent (ici) et l'enfant (choixRadio) */}
        <ChoixRadio tab={radionucleide} changeHandler={HandleChange} />
        <RenderInfo/>
    </div>
}

export default Home;