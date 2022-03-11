import * as React from 'react';
import {createTheme} from '@mui/material/styles';
import message from '../../images/Message.svg'


export function Comment() {




    return <div style={{display: 'block', height: '50%'}}>
    <img src={message} className={"cannot-comment"} alt="" style={{height: '100px',width: '100px'}}/>
    <h3>Vous avez déjà donné votre avis, vous pouvez le consulter dans la page d'Avis !</h3>
    </div>

}

     
