import * as React from 'react';
import {useState} from 'react';
import {Rating, TextField} from "@mui/material";
import {Button} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';


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

                <div className={"titre"} ><TextField fullWidth maxWidth={"sm"} placeholder={"Titre"} variant="outlined" size={"large"}></TextField></div>
                <div className={"comment"} maxLines={5}><TextField fullWidth multiline rows={3}  placeholder={"Commentaire"} variant="outlined" size={"large"}></TextField></div>
                

                <Button style={{background: 'orange'}} 

                        variant="contained"
                        component="label"
                >
                        Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button>

                <div className={"LigneVide"}></div>

            </div>
        </div>
    );
}