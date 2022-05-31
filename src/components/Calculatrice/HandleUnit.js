import React from "react";
import {FormControl, MenuItem, Select , Box, InputLabel, FormHelperText} from '@mui/material';

function HandleUnite(props){
    return (
        // <div>
        //     <select onClick={(e)=> props.HandleChange(e.target.value)} >
        //     <option value="">Veuillez Choisir une unité</option>
        //     <option value="Sv">Sv</option>
        //     <option value="mSv">mSv</option>
        //     <option value="μSv">μSv</option>
        //     <option value="nSv">nSv</option>
        // </select>
        // </div>
        <Box sx={{maxWidth: 20 , marginTop:1}}>
            <FormControl>
                <InputLabel>Unité</InputLabel>
                <Select autoWidth label="Unité" 
                onChange={(e)=> props.HandleChange(e.target.value)} >
                    <MenuItem value="Sv">Sv</MenuItem>
                    <MenuItem value="mSv">mSv</MenuItem>
                    <MenuItem value="μSv">μSv</MenuItem>
                    <MenuItem value="nSv">nSv</MenuItem>
                </Select>
                <FormHelperText>Sélectionner une unité</FormHelperText>
            </FormControl>
        </Box>     
    );  
}

export default HandleUnite;