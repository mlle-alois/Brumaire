import * as React from 'react';
import {createTheme} from '@mui/material/styles';
import token from '../../images/Key.svg'


export function Token() {



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

   
    return <div style={{display: 'block', height: '50%'}}>
    <img src={token} className={"token-expired"} alt="" style={{height: '100px',width: '100px'}}/>
    <h3>Votre accès a expiré !</h3>
    </div>

}

     
