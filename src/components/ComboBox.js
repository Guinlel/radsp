import React,{useState} from "react";

function ChoixRadio(props){
    const [radio , setRadio ] = useState([props.tab]);
    const radios = radio[0];
    // const optionRadio = radios.map((radio)=>
    // <option key={radio.id} value={radio.id} >
    //     {radio.name}
    // </option>);

    const optionRadio = radios.map((radio)=>
        <MenuItem key={radio.id} value={radio.id}>{radio.name}</MenuItem>
    )

    return(
        <select  className="choix-radio" onFocus={props.changeActive} onClick={(e)=> props.changeHandler(e.target.value)}>
            <option value="">Veuillez choisir un élément</option>
            {optionRadio}
        </select>
    )       
}

export default ChoixRadio;
