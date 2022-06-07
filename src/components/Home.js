import React, { useState } from "react";
import ChoixRadio from "./ComboBox";
import Header from "./Header";
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
                <p className="card-title">Energies relachées :</p>
                <p>{energie}</p>
            </div>
            )
        };
    }

    const HandleChange = (e) => {
        // Initialise la liste avec les données correspondant aux choix du select 
        var id = e;
        // eslint-disable-next-line
        radionucleide.map((radio) => {
            // eslint-disable-next-line
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


    const handleActive = ()=>{
        if (periode){
            setPeriode('true')
        } else {
            setActive(!isActive);
        }
    }
    
    return (
    <div className="home">
        <Header/>
        {/* Fais la navette entre le component parent (ici) et l'enfant (choixRadio) */}
        <ChoixRadio className="choix-home" tab={radionucleide} changeActive={handleActive} changeHandler={HandleChange} />
        <div id="card-rad" className={isActive ? null : 'card-rad-hidden'} >         
            <RenderInfo />
        </div>
    </div>
    )
}

export default Home;