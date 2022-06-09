import React from "react";
import Header from "./Header";

function About(){
    return(
        <div className="container">
            <Header/>
            <p className="about">
            Cette Progressive Web App a été développée par Loic GUINLE à l’occasion de son stage dans la société Enyoko.<br/>
            Pour toute demande  / remarque écrire à : guillaume@enyoko.fr – SPV RAD SDIS 32
            </p>
        </div>
    )
}

export default About;