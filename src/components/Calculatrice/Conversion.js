import React, { useState } from 'react';
import Header from '../Header.js';



function Conversion(value) {
  // Création des variables nécessaire à la conversion en partant d'un CI
  const convBq = 3.7 * Math.pow(10, 10);
  const convKBq = 3.7 * Math.pow(10, 7);
  const convMBq = 3.7 * Math.pow(10, 4);
  const convGBq = 3.7 * 10;
  const convTBq = 3.7 * Math.pow(10, -2);
  // Hook permettant de set les values
  const [bq, setBq] = useState(0);
  const [kbq, setKBq] = useState(0);
  const [mbq, setMBq] = useState(0);
  const [gbq, setGBq] = useState(0);
  const [tbq, setTBq] = useState(0);

  function Conversion(value) {
    // Conversion du Curie en l'unité souhaité afin qu'elle soit affecté 
    // On utilise donc les setteurs des Hooks pour qu'on puisse récuperer les valeurs et les exploiters
    setBq(value * convBq);
    setKBq(value * convKBq);
    setMBq(value * convMBq);
    setGBq(value * convGBq);
    setTBq(value * convTBq);
  }
  return (
    <div className='container'>
      <Header/>
      <div className="render-conversion">
        
        <label className="field-input" >
          <input type="number" onChange={e => Conversion(e.target.value)}></input>
          <span className='placeholder'>Valeur Ci</span>

        </label>
        <label className='field-input'>
          <input type="number" value={bq} disabled></input>
          <span className='placeholder'> Valeur Bq</span>
        </label>

        <label className='field-input'>
          <input type="number" value={kbq} disabled></input>
          <span className='placeholder'>Valeur KBq</span>
        </label>

        <label className='field-input'>
          <input type="number" value={mbq} disabled></input>
          <span className='placeholder'>Valeur MBq</span>
        </label>

        <label className='field-input'>
          <input type="number" value={gbq} disabled></input>
          <span className='placeholder'>GBq</span>
        </label>

        <label className='field-input'>
          <input type="number" value={tbq} disabled></input>
          <span className='placeholder'>Valeur TBq</span>
        </label>
      </div>

    </div>
  )

}

export default Conversion;