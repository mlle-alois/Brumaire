import React from 'react'
import {Button, TextField, ThemeProvider} from "@mui/material";
import scooter1 from '../../images/scooter-1.jpg';
import scooter2 from '../../images/scooter-4.jpg';
import './Purchase.css'
import {theme} from "../themes/theme";

export const Purchase = () => {
    return <div>
        <img src={scooter1} className={"picture"} alt=""/>
        <form className={"form"}>
            <br/><br/>
            <TextField id="outlined-basic" label="Nom" variant="outlined" required InputProps={{disableUnderline: true}} inputProps={{ maxLength: 30}}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Prénom" variant="outlined" required InputProps={{disableUnderline: true}} inputProps={{ maxLength: 30}}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"} required InputProps={{disableUnderline: true}} inputProps={{ maxLength: 50}}/>
            <br/><br/>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="neutral" type={"submit"}>J'achète mon scooter</Button>
            </ThemeProvider>
        </form>
        <img src={scooter2} className={"picture"} alt=""/>
    </div>
}
