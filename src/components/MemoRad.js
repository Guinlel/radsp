import React from "react"
import sas from '../img/sas-sdis32.png';
import doubleEnveloppe from '../img/double-enveloppe-rad.png';
import Header from "./Header";

function MemoRad (){
    return (
        <div className="container">
            <Header/>
            <div className="card-memo">
                <img className="memo" src={sas} alt="plan sas"/>
                <img className="memo" src={doubleEnveloppe} alt='double enveloppe'/>
            </div>
        </div>
    )

}

export default MemoRad