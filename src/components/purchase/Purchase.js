import React from 'react'
import {Button, TextField} from "@mui/material";

export const Purchase = () => {
    return <div>
        <form>
            <TextField id="outlined-basic" label="Nom" variant="outlined" required/>
            <br/><br/>
            <TextField id="outlined-basic" label="Prénom" variant="outlined" required/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"}
                       errorText={"Veuillez rentrer un email valide"}
                       required/>
            <br/><br/>
            <Button variant="contained" type={"submit"}>J'achète mon scooter</Button>
        </form>
    </div>
}
