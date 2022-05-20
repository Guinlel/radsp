import axios from "axios";
import React, { useEffect, useState } from "react";

function Meteo(props) {
    const [lat, setLatitude] = useState();
    const [lng, setLongitude] = useState();
    const [speed, setSpeed] = useState(0);
    const [deg, setDeg] = useState();
    const [direction, setDirection] = useState("");
    const [rafale, setRafale] = useState(0);
    const API_KEY = "4d1836cb9cf0a6b1910a892834b98e55";
    const SearchAPI = "https://api.openweathermap.org/data/2.5/weather?lat=43.8497395&lon=0.6636132&appid=" + API_KEY


    useEffect(() => {
        navigator.geolocation.watchPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            meteoChange();
        })
        switchDirection();
    })

    const switchDirection = () => {
        // Utilisation des if car les switch case ne marchais pas
        if (deg<22.5){       
            setDirection("Nord")
        }else if (deg < 45){
            setDirection("Nord Nord Est");
        }else if (deg < 67.5){
            setDirection("Nord Est");
        }else if (deg < 90){
            setDirection("Est Nord Est");
        }else if (deg <112.5){
            setDirection("Est");
        }else if (deg<135){
            setDirection("Est Sud Est");
        }else if (deg<157.5){
            setDirection("Sud Est");
        }else if (deg < 180){
            setDirection("Sud Sud Est");
        }else if (deg < 202.5){
            setDirection("Sud");
        }else if (deg < 225){
            setDirection("Sud Sud Ouest");
        }else if (deg <247.5){
            setDirection("Sud Ouest");
        }else if (deg < 270){
            setDirection("Ouest Sud Ouest");
        }else if (deg < 292.5){
            setDirection("Ouest");
        }else if (deg < 315){
            setDirection("Ouest Nord Ouest");
        }else if (deg < 337.5){
            setDirection("Nord Ouest");
        }else if (deg < 360){
            setDirection("Nord Nord Ouest");
        }
    }

    const meteoChange = () => {
        axios.get(SearchAPI).then((response) => {
            console.log(response);
            setSpeed(response.data.wind.speed);
            setDeg(response.data.wind.deg);
            setRafale(response.data.wind.gust);
        })
    }


    return (
        <div>
            <p>Vitesse du vent :{speed * 3.6} km/h</p>
            <p>Orientation du vent: {deg}° , {direction}</p>
            <p>Rafale: {rafale * 3.6} km/h</p>
        </div>
    )
}

export default Meteo;