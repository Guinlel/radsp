import React, { useState } from "react";
import ChoixRadio from "./ComboBox";
import Navigation from "./Navigation";
import radionucleides from "../ressources/Radio.json";

function Home() {
    const [periode, setPeriode] = useState();
    const [unite, setUnite] = useState();
    const [name, setName] = useState("");
    const [energie, setEnergie] = useState("");
    const [emissionPrinc, setEmissionPrinc] = useState("");
    const [emissionSecond, setEmissionSec] = useState("");
    const radionucleide = radionucleides;


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
        <ul>
            <p>Nom :</p><li>{name}</li>
            <p>Période :</p><li>{periode} {unite}</li>
            <p>Principales émissions : </p><li>{emissionPrinc}, {emissionSecond}</li>
            <p>Energies relachés :</p> <li>{energie}</li>

        </ul>
    </div>
}

export default Home;