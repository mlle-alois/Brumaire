import * as React from 'react';
import {useState} from 'react';
import {Button, Rating, TextField} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import './Ratings.css'
import {theme} from "../themes/theme";
import {sendRatings} from "../../services/ratings.service";

export function Ratings() {
    const token = new URLSearchParams(window.location.search).get("token");

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [autonomyRating, setAutonomyRating] = useState(0);
    const [deliveryRating, setDeliveryRating] = useState(0);
    const [handlingRating, setHandlingRating] = useState(0);
    const [picture, setPicture] = useState("")

    const onlyOne = function () {
        this.on('addedfile', function (file) {
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
        });
    }

    async function handleSubmit(event) {
        //TODO get token
        console.log(picture)
        await sendRatings(title, content, autonomyRating, deliveryRating, handlingRating, picture, token)
    }

    return (
        <div className={"body"}>
            <div className={"rating"}>
                <div className={"rating-context"}>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div className={"average-rating"}>
                            <Rating value={5} precision={5}/>
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

                        <div className={"titre"}><TextField fullWidth placeholder={"Titre"}
                                                            onChange={event => setTitle(event.target.value)}
                                                            variant="outlined" size={"large"}
                                                            inputProps={{maxLength: 30}}></TextField></div>
                        <div className={"comment"}><TextField fullWidth multiline rows={3}
                                                              onChange={event => setContent(event.target.value)}
                                                              placeholder={"Commentaire"} variant="outlined"
                                                              size={"large"}
                                                              inputProps={{maxLength: 250}}></TextField></div>


                        <div><Button style={{background: 'orange', marginBottom: 10}}
                                     variant="contained"
                                     component="label">
                            Ajouter une image
                            <input type="file"
                                   onChange={event => setPicture(event.target.value)}
                                   hidden/>
                        </Button></div>

                        <div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="neutral" type={"button"}
                                        onClick={handleSubmit}>Envoyer</Button>
                            </ThemeProvider>
                        </div>
                    </form>
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}
