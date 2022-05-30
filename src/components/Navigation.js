import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation(props){
    return(
    <nav className="navigation">
        <Link to="/" className="link" onClick={(e)=> props.toggleMenu()} >Accueil</Link>
        <Link to="/conversion" className="link" onClick={(e)=> props.toggleMenu()} > Conversion</Link>
        <Link to="/calcul-dose" className="link" onClick={(e)=> props.toggleMenu()}>Calcul de dose</Link>
        <Link to="/calcul-perimetre" className="link" onClick={(e)=> props.toggleMenu()}>Calcul de périmètre</Link>
        <Link to="/activite-restante" className="link" onClick={(e)=> props.toggleMenu()}> Activité restante </Link>
        <Link to ="/meteo" className="link" onClick={(e)=> props.toggleMenu()}>Meteo</Link>
    </nav> 
    )
    
}

export default Navigation;