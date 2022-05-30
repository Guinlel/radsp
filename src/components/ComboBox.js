import React,{useState} from "react";
import {FormControl, MenuItem, Select , SelectChangeEvent, Box, InputLabel,FormHelperText} from '@mui/material';

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
        // <select className="choix-radio" >
        //     <option>Veuillez Choisir un Element</option>
        //     {optionRadio}
        // </select>
        <Box sx={{maxWidth : 300, marginTop: 4}}>
            <FormControl>
            <InputLabel>Element</InputLabel>
            <Select autoWidth label="Element" onChange={(e)=> props.changeHandler(e.target.value)}>
            {optionRadio}
            </Select>
            <FormHelperText>Selectionner un élément</FormHelperText>
            </FormControl>
        </Box>
    )       
}

export default ChoixRadio;
