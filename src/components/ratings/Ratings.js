import * as React from 'react';
import {useState} from 'react';
import {Rating, TextField} from "@mui/material";

import './Ratings.css'

export function Ratings() {
    const [autonomyRating, setAutonomyRating] = useState(0);
    const [deliveryRating, setDeliveryRating] = useState(0);
    const [handlingRating, setHandlingRating] = useState(0);

    return (
        <div className={"rating"}>
            <div className={"rating-context"}>
                <br/>
                <div className={"average-rating"}>
                    <Rating value={5} precision={5}
                    />
                    <span className={"rating-title"}> Donnez votre avis</span>
                    <Rating value={5} precision={5}
                    />
                </div>
                <p>__________________________________________________________________________</p>

                <div className={"firstEvaluation"}>
                    <h5 id="firstRasting">Autonomie du produit</h5>
                    <Rating name="rating" value={autonomyRating} onChange={(_, value) => {
                        setAutonomyRating(value);
                    }}/>
                </div>

                <div className={"secondEvaluation"}>
                    <h5 id="secondRasting">Rapidité de livraison</h5>
                    <Rating name="rating" value={deliveryRating} onChange={(_, value) => {
                        setDeliveryRating(value);
                    }}/>
                </div>

                <div className={"thirdEvaluation"}>
                    <h5 id="thirdRasting">Prise en main</h5>
                    <Rating name="rating" value={handlingRating} onChange={(_, value) => {
                        setHandlingRating(value);
                    }}/>
                </div>

                <TextField margin-bottom={10} className={"comment"} placeholder={"Commentaire"} variant="outlined"
                           multilinerows={5} rowsMax={10} size={"large"}/>

                <div className={"LigneVide"}/>

            </div>
        </div>
    );
}