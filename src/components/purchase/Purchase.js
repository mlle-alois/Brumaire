import React, {useState} from 'react'
import {Button, TextField, ThemeProvider} from "@mui/material";
import scooter1 from '../../images/scooter-1.jpg';
import scooter2 from '../../images/scooter-4.jpg';
import './Purchase.css'
import {theme} from "../../themes/theme";
import {sendPurchase} from "../../services/purchase.service";

export const Purchase = () => {
    const [firstname, setFirstname] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    async function handleSubmit(event) {
        alert("Merci pour votre achat, vous recevrez prochainement un email pour évaluer notre produit")
        await sendPurchase(firstname, name, email)
    }
    
    return <div>
        <img src={scooter1} className={"picture"} alt=""/>
        <form className={"form"} onSubmit={handleSubmit}>
            <br/><br/>
            <TextField id="outlined-basic" label="Nom" onChange={event => setName(event.target.value)}
                       variant="outlined" required inputProps={{maxLength: 30}}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Prénom" onChange={event => setFirstname(event.target.value)}
                       variant="outlined" required inputProps={{maxLength: 30}}/>
            <br/><br/>
            <TextField id="outlined-basic" label="Email" onChange={event => setEmail(event.target.value)}
                       variant="outlined" type={"email"} required inputProps={{maxLength: 50}}/>
            <br/><br/>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="neutral" type={"submit"}>J'achète mon
                    scooter</Button>
            </ThemeProvider>
        </form>
        <img src={scooter2} className={"picture"} alt=""/>
    </div>
}
