import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return(
    <nav className="navigation">
        <Link to="/" className="link">Accueil</Link>
        <Link to="/conversion" className="link"> Conversion</Link>
        <Link to="/calcul-dose" className="link">Calcul de dose</Link>
        <Link to="/calcul-perimetre" className="link">Calcul de périmètre</Link>
        <Link to="/activite-restante" className="link"> Activité restante </Link>
        <Link to ="/meteo" className="link">Meteo</Link>
    </nav>
    )
    
}

export default Navigation;