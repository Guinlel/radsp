import react,{useEffect, useState, useRef} from "react";


function Geolocalisation(props){
    const [latitude, setLatitude]= useState(0);
    const [longitude, setLongitude]= useState(0);
    const ref= react.useRef(null);
    const [map, setMap]= useState();
    const API_Key="AIzaSyCJP7zuZOUv1q8BmF7SU-rFBV-mwgdpQ5Q"
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
           setLatitude(position.coords.latitude);
           setLongitude(position.coords.longitude);
        
    });
    })
}

export default Geolocalisation;