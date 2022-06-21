import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";

function Meteo(props) {
    const [lat, setLatitude] = useState(null);
    const [lng, setLongitude] = useState(null);
    const [speed, setSpeed] = useState(null);
    const [deg, setDeg] = useState(null);
    const [direction, setDirection] = useState(null);
    const [place , setPlace] = useState("");
    const [raf, setRafale] = useState(null);
    const [humidite , setHumidite] = useState(null);
    const [online , setOnline] = useState(true);
    // OpenWeather Api
    const API_KEY = "4d1836cb9cf0a6b1910a892834b98e55";

    // Limitation des chiffres aprés la virgule pour les rafales de vent
    let rafa = raf*3.6;
    let rafale = rafa.toFixed(2);
    // Limitation des chiffres aprés la virgule pour la vitesse du vent
    let vit = speed*3.6;
    let vitesse = vit.toFixed(2);
    useEffect(() => {
        navigator.geolocation.watchPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            
        })
    meteoChange();
    isOnline();
    },[lat,lng,])


    const Online = ()=>{
        // Si l'utilisateur est connecter à internet afficher les infos sinon le prévient qu'il n'est pas connecter
        if (online){
            return(
                <React.Fragment>
                    <p className="meteo-place">{place}</p>
                    <VentNul/>
                    <RafaleNul/>
                    <DirectionNull/>
                    <Humidite/>                     
                </React.Fragment>
            )            
        }else{
            return <p>Vous n'êtes pas connecter à Internet.</p>
        }
    }

    const isOnline = ()=>{
        // Verifie si la connexion internet est active et set online à true ou false pour pouvoir le reutiliser dans le component Online
        if (navigator.onLine){
            setOnline(true);
        } else {
            setOnline(false);
        }
    }

    // Ces 3 components verifie si l'api call et le set à bien ete effectuer et indique à l'utiliser de patienter
    const RafaleNul = ()=>{
        if (!raf ){
            return <p>Chargement en cours , Veuillez patienter ...</p> ;
        } else {
            return <p>Rafale: {rafale} km/h</p>;
        }
    }

    const Humidite = ()=>{
        if (!humidite){
            return <p></p>
        } else {
            return <p> Humidité : {humidite} %</p>
        }
    }

    const VentNul = ()=>{
        if (!speed){
            return <p></p>
        } else{
            return <div className="wind-info"> <p>Vitesse du vent :{vitesse} km/h</p> 
                         <p>Orientation du vent: {deg}° {direction}</p> 
                    </div>
        }
    }
    const switchDirection = () => {
        // Utilisation des if car les switch case ne marchais pas
        if (deg === null){
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


    const meteoChange = async () => {
        if (lat === null){
            return <div><p>Les coordonnées n'ont pas été charger</p></div>
        }else {
            await axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=" + API_KEY).then((response) => {
                console.log(response);
                setSpeed(response.data.wind.speed);
                setDeg(response.data.wind.deg);
                setRafale(response.data.wind.gust);
                setPlace(response.data.name);
                setHumidite(response.data.main.humidity);         
            }).catch((error)=>{
                console.log(error);
            })
        }
        switchDirection();
    }

    const handleRefresh = ()=>{
        meteoChange();
    }

    const DirectionNull = ()=>{
        if (!direction && deg){
            return <p> Cliquer sur rafraichir pour obtenir la direction du vent </p>
        }
    }


    return (
        <div className="container">
            <Header/>
            <div className="card-meteo">         
                <Online/>
            </div>
            <button className="btn-refresh" onClick={handleRefresh}>Rafraichir</button>
        </div>
        
    )
    }

export default Meteo;