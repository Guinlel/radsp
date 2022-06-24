import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Accueil() {

    return (
        <div className="accueil-container">
            <Header/>
            <div className="presentation">
            <p>
            Les outils et informations de cette application sont fournis à titre indicatifs utilisables lors d’exercices.<br/>
            Ils ne remplacent pas les méthodes de calculs et sources d’informations habituelles lors d’interventions        
            </p>      
            </div>
            <div className="accueil-nav">

                <div className="button-container">
                    <Link to="/conversion" className="fake-button">Conversion Ci vers Bq</Link>
                    <Link to="/calcul-dose" className="fake-button">Calcul de dose selon la distance</Link>
                </div>

                <div className="button-container">
                    <Link to="/calcul-perimetre" className="fake-button">Calcul de distance selon la dose</Link>
                    <Link to="/activite-restante" className="fake-button">Activité restante</Link>
                </div>

                <div className="button-container">
                    <Link to="/meteo" className="fake-button">Meteo</Link>
                    <Link to="/radionucleide" className="fake-button">Radionucleide</Link>
                </div>

                <div className="button-container">
                    <Link to="/etiquette" className="fake-button">Etiquettes de Transport</Link>
                    <Link to='/calcul-dose-beta' className="fake-button">Calcul de dose rayonnements β</Link>                 
                </div>

                <div className="button-container">
                    <Link to='/calcul-dose-gamma' className="fake-button">Calcul de dose rayonnements γ</Link>
                    <Link to='/memo-rad' className="fake-button">Memo RAD</Link>
                </div>

                <div className="button-container">
                    <Link to='/ecran' className="fake-button">Ecrans</Link>   
                </div>
            </div>
        </div>
    )

}

export default Accueil;