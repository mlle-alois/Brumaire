import {React, useState} from 'react'
import './FiveStarsRating.css'
import Button from '@material-ui/core/Button'
import {TextField} from '@material-ui/core'
import {Rating} from '@material-ui/lab'
import {Grid} from '@material-ui/core/'


function StarRating() {
    const[rating,setRating] = useState(3);

    return <div className={"rating"} src={{background_color:"grey"}} >

        <div className={"rating-context"}>
            <br/>
            <div class={"average-rating"}>
                <Rating value={5} precision={5}
                />
                <span className={"rating-title"}> Donnez votre avis</span>
                <Rating value={5} precision={5}
                />
            </div>
            <p>__________________________________________________________________________</p>
            
            <div className={"firstEvaluation"}>
                <h5 id="firstRasting">Autonomie du produit</h5>
                <Rating name="rating" value={0} precision={5} onChange={(_, value) => {setRating(value);}}/>
            </div>

            <div className={"secondEvaluation"}>
                <h5 id="secondRasting">Rapidité de livraison</h5>
                <Rating name="rating" value={0} precision={5} onChange={(_, value) => {setRating(value);}}/>
            </div>

            <div className={"thirdEvaluation"}>
                <h5 id="thirdRasting">Prise en main</h5>
                <Rating name="rating" value={0} precision={5} onChange={(_, value) => {setRating(value);}}/>
            </div>

            <TextField margin-bottom={10} className={"comment"} placeholder={"Commentaire"} variant="outlined" multilinerows={5} rowsMax={10} size={"large"}/>                

            <div className={"LigneVide"}></div>

        </div>
    </div>
}

export default StarRating;