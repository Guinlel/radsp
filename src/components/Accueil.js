import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Accueil() {

    return (
        <div className="accueil-container">
            <Header/>
            <div className="presentation">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ultrices ante. Aliquam fringilla est id auctor varius. Vestibulum facilisis sagittis laoreet. Donec a feugiat lacus. Curabitur arcu lorem, auctor non maximus at, consequat vitae tortor. Pellentesque vitae justo et ligula vehicula eleifend porttitor faucibus sem. Cras commodo et elit.
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
                </div>

            </div>
        </div>
    )

}

export default Accueil;