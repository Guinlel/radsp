import React from "react";
import debitEtiquette from '../img/Debit-dose-etiquettes.png';
import etiquetteTransport from '../img/etiquettes-transport.png';
import etiquetteGravite from '../img/gravite-etiquettes-transport.png';
import Header from "./Header";


function Etiquette() {
    return (
        <div className="container">
            <Header/>
            <div className="container-etiquette">
                <img className="etiquette" src={etiquetteTransport} alt="Etiquette de transport" />
                <img className="etiquette" src={debitEtiquette} alt="Etiquette sur les débits de dose" />             
                <img className="etiquette" src={etiquetteGravite} alt="Etiquette sur la gravité" />
            </div>
        </div>
    )
}

export default Etiquette;