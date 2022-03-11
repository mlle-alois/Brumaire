import * as React from 'react';
import {useState, useEffect} from 'react';
import {Button, Rating, TextField} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {sendRatings} from '../../services/ratings.service'

import './Ratings.css'
import {goToReviews} from "../../services/routing.service";
import Popup from "reactjs-popup";

export function Ratings() {
    const token = new URLSearchParams(window.location.search).get("token");


    const [autonomyRating, setAutonomyRating] = useState(0);
    const [deliveryRating, setDeliveryRating] = useState(0);
    const [handlingRating, setHandlingRating] = useState(0);

    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    const [image, setImage] = useState(null);
    const [imagePath, setImagePath] = useState('');

    if (token === null) {
        goToReviews()
        return alert("Vous n'êtes pas autorisé à accéder à cette page")
    }

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

    async function onlyOne() {
        alert("Merci pour votre évaluation !")
        await sendRatings(
            title,
            comment,
            autonomyRating,
            deliveryRating,
            handlingRating,
            image
        )
        return goToReviews()
    }

    return (
        <div className={"body"}>
            <div className={"rating"}>
                <div className={"rating-context"}>
                    <br/>
                    <div className={"average-rating"}>
                        <Rating value={5} precision={5}
                        />
                        <span className={"rating-title"}> Donnez votre avis</span>
                        <Rating value={5} precision={5}/>
                    </div>
                    <hr className={"separator"}/>

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

                    <div className={"titre"}>
                        <TextField onChange={(e) => setTitle(e.target.value)} fullWidth maxWidth={"sm"}
                                   placeholder={"Titre"} variant="outlined" size={"large"}
                                   inputProps={{maxLength: 30}}></TextField>
                    </div>

                    <div className={"comment"} maxLines={5}>
                        <TextField onChange={(e) => setComment(e.target.value)} fullWidth multiline rows={3}
                                   placeholder={"Commentaire"} variant="outlined" size={"large"}
                                   inputProps={{maxLength: 250}}></TextField>
                    </div>

                    {image && <div className={"comment"} maxLines={5}>
                        <a href={imagePath} target='_blank'>{image.name}</a>
                    </div>}

                    <div>
                        <Button style={{background: 'orange', marginBottom: 10}} variant="contained" component="label">
                            Ajouter une image
                            <input
                                type="file"
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                    setImagePath(e.target.value)
                                }}
                                hidden
                            />
                        </Button>
                    </div>

                    {/* <div claaName={"submit"}><Button variant="contained" style={{background: 'green'}}>
                    Envoyer
                </Button></div> */}

                    <div>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="neutral" type={"submit"}
                                    onClick={onlyOne}>Envoyer</Button>
                        </ThemeProvider>
                    </div>

                    <div className={"LigneVide"}></div>
                </div>
            </div>
        </div>
    );
}
