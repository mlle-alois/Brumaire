import * as React from 'react';
import {createTheme} from '@mui/material/styles';
import token from '../../images/Key.svg'


export function Token() {


   
    return <div style={{display: 'block', height: '50%'}}>
    <img src={token} className={"token-expired"} alt="" style={{height: '100px',width: '100px'}}/>
    <h3>Votre accès a expiré !</h3>
    </div>

}

     
