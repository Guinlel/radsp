import React from "react";

function HandleUnite(props){
    return (
        <div>
            <select className="unite-select" onChange={(e)=> props.HandleChange(e.target.value)} >
            <option value="">Veuillez Choisir une unité</option>
            <option value="Sv">Sv</option>
            <option value="mSv">mSv</option>
            <option value="μSv">μSv</option>
            <option value="nSv">nSv</option>
        </select>
        </div>        
    );  
}

export default HandleUnite;