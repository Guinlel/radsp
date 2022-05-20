import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";

function Meteo(props) {
    const [lat, setLatitude] = useState(null);
    const [lng, setLongitude] = useState(null);
    const [speed, setSpeed] = useState(null);
    const [deg, setDeg] = useState(null);
    const [direction, setDirection] = useState("");
    const [place , setPlace] = useState("");
    const [raf, setRafale] = useState(null);
    const API_KEY = "4d1836cb9cf0a6b1910a892834b98e55";

    // Limitation des chiffres aprés la virgule pour les rafales de vent
    let rafa = raf*3.6;
    let rafale = rafa.toFixed(2);
    useEffect(() => {
        navigator.geolocation.watchPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            meteoChange();
        })
        switchDirection();
    })

    const RafaleNul = ()=>{
        if (!raf ){
            return <p>Aucune informations sur les rafales de vents disponible</p> ;
        } else {
            return <p>Rafale: {rafale} km/h</p>;
        }
    }

    const VentNul = ()=>{
        if (!speed){
            return <p> Aucune informations disponible </p>
        } else{
            return <div> <p>Vitesse du vent :{speed * 3.6} km/h</p> 
                         <p>Orientation du vent: {deg}° {direction}</p> 
                    </div>
        }
    }
    const switchDirection = () => {
        // Utilisation des if car les switch case ne marchais pas
        if (deg == null){
            setDirection("");
        }else if (deg<11.25 && deg>348.75){       
            setDirection("Nord")
        }else if (deg < 33.75 && deg>11.25){
            setDirection("Nord Nord Est");
        }else if (deg < 56.25 && deg>33.75){
            setDirection("Nord Est");
        }else if (deg < 78.75 && deg>56.25 ){
            setDirection("Est Nord Est");
        }else if (deg <101.25 && deg>78.75){
            setDirection("Est");
        }else if (deg<123.75 && deg>101.25){
            setDirection("Est Sud Est");
        }else if (deg<146.25 && deg>123.75){
            setDirection("Sud Est");
        }else if (deg < 168.75 && deg>146.25){
            setDirection("Sud Sud Est");
        }else if (deg <191.25 && deg>168.75 ){
            setDirection("Sud");
        }else if (deg < 213.75 && deg>191.25){
            setDirection("Sud Sud Ouest");
        }else if (deg <236.25 && deg>213.75){
            setDirection("Sud Ouest");
        }else if (deg < 258.75 && deg >236.25){
            setDirection("Ouest Sud Ouest");
        }else if (deg < 281.25 && deg>258.75){
            setDirection("Ouest");
        }else if (deg < 303.75 && deg>281.25){
            setDirection("Ouest Nord Ouest");
        }else if (deg < 326.25 && deg>303.75){
            setDirection("Nord Ouest");
        }else if (deg < 348.75 && deg>326.25){
            setDirection("Nord Nord Ouest");
        }
    }

    const meteoChange = () => {
        if (lat === null){
            return <div><p>Les coordonnées n'ont pas été charger</p></div>
        }else {
            axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=" + API_KEY).then((response) => {
                console.log(response);
                setSpeed(response.data.wind.speed);
                setDeg(response.data.wind.deg);
                setRafale(response.data.wind.gust);
                setPlace(response.data.name);
            }).catch((error)=>{
                console.log(error);
            })
        }     
    }


    return (
        <div>
            <Navigation/>
            <p>{place}</p>
            <VentNul/>
            <RafaleNul/>  
        </div>
    )
}

export default Meteo;