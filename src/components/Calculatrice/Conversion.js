import React,{useState} from 'react';
import {TextField} from'@mui/material';

function Conversion (value){    
    // Création des variables nécessaire à la conversion en partant d'un CI
    const convBq = 3.7*Math.pow(10,10);  
    const convKBq = 3.7*Math.pow(10,7);
    const convMBq = 3.7*Math.pow(10,4);
    const convGBq = 3.7*10;
    const convTBq = 3.7*Math.pow(10,-2);
    // Hook permettant de set les values
    const [bq,setBq] = useState(0);
    const [kbq , setKBq] = useState(0);
    const [mbq , setMBq] = useState(0);
    const [gbq , setGBq] = useState(0);
    const [tbq , setTBq] = useState(0);

    function Conversion(value){
      // Conversion du Curie en l'unité souhaité afin qu'elle soit affecté 
      // On utilise donc les setteurs des Hooks pour qu'on puisse récuperer les valeurs et les exploiters
      setBq(value*convBq);
      setKBq(value * convKBq);
      setMBq(value*convMBq);
      setGBq(value*convGBq);
      setTBq(value*convTBq);
    }
    return (
    <div className="render-conversion">    
      <TextField sx={{maxWidth: 300 , marginTop: 1}} label="CI" onChange={e => Conversion(e.target.value)}></TextField>
      <TextField sx={{maxWidth: 300 , marginTop: 1}} label="Bq" value={bq} disabled></TextField> 
      <TextField sx={{maxWidth: 300 , marginTop: 1}} label="KBq" value={kbq} disabled></TextField>
      <TextField sx={{maxWidth: 300 , marginTop: 1}} label="MBq" value={mbq} disabled></TextField>
      <TextField sx={{maxWidth: 300 , marginTop: 1}} label="GBq" value={gbq} disabled></TextField> 
      <TextField sx={{maxWidth: 300 , marginTop: 1}} label="TBq" value={tbq} disabled></TextField> 
    </div>
    )
  }

export default Conversion;