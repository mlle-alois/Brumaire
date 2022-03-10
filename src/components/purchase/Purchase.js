import React from 'react'
import {Button, TextField, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';

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
        <form>
            <br/><br/>
            <TextField id="outlined-basic" label="Nom" variant="outlined" required/>
            <br/><br/>
            <TextField id="outlined-basic" label="Prénom" variant="outlined" required/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"}
                       errorText={"Veuillez rentrer un email valide"}
                       required/>
            <br/><br/>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="neutral" type={"submit"}>J'achète mon scooter</Button>
            </ThemeProvider>
        </form>
    </div>
}
