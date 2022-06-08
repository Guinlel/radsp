import React, { useEffect, useState } from "react";

function ChoixRadio(props) {
    // eslint-disable-next-line
    const [radio, setRadio] = useState([props.tab]);
    const [optionRadio, setOptionRadio] = useState([])
    const radios = radio[0];

    useEffect(() => {
        if (props.filter === 'yes') {
            setOptionRadio(radios.filter(radio => radio.unite === 'minutes' || radio.unite === 'heures' || radio.unite==='jours').map((radio) =>
                <option key={radio.id} value={radio.id} >
                    {radio.name}
                </option>))
        } else {
            setOptionRadio(radios.map((radio) =>
                <option key={radio.id} value={radio.id} >
                    {radio.name}
                </option>))
        }
     },[] );


return (
    <select className="choix-radio" onFocus={props.changeActive} onChange={(e) => props.changeHandler(e.target.value)}>
        <option value="">Veuillez choisir un élément</option>
        {optionRadio}
    </select>
)
}

export default ChoixRadio;