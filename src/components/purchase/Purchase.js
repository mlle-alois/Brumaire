import React from 'react'
import {Button, TextField, ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import scooter1 from '../../images/scooter-1.jpg';
import scooter2 from '../../images/scooter-4.jpg';
import './Purchase.css'

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#cec4c4',
        },
    },
});

export const Purchase = () => {
    return <div>
        <img src={scooter1} className={"picture"} alt=""/>
        <form className={"form"}>
            <br/><br/>
            <TextField id="outlined-basic" label="Nom" variant="outlined" required/>
            <br/><br/>
            <TextField id="outlined-basic" label="Prénom" variant="outlined" required/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"} required/>
            <br/><br/>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="neutral" type={"submit"}>J'achète mon scooter</Button>
            </ThemeProvider>
        </form>
        <img src={scooter2} className={"picture"} alt=""/>
    </div>
}
