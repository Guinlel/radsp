import React, { useEffect, useState} from "react";
import "../../App.css"
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet"
import Navigation from "../Navigation";



function Geolocalisation(props) {
    const [position, setPosition] = useState(null);
    function MarkerPos() {
          const map = useMapEvents({
              mouseover(){
                  map.locate()
              },
              locationfound(e){
                  setPosition(e.latlng)
                  console.log(position);
                  map.flyTo(e.latlng,map.getZoom())
              },
          })
        return position === null? null:(
            <Marker position={position}>
                <Popup> Vous êtes ici</Popup>
            </Marker>
        )
    }

    return (
        <div className="leaflet-container">
            <Navigation/>     
            <MapContainer center={{ lat: 43.64638, lng: 0.586709 }} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerPos/>
        </MapContainer>
        </div>       
    )
}

export default Geolocalisation;