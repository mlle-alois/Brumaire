import * as React from 'react';
import {useEffect} from "react";
import {getReviews} from "../../services/reviews.service";
import {getRatingsAverage} from "../../services/ratings.service";
import '../reviews/Reviews.css'
import {Rating} from "@mui/material";

import logo from './logo.png';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export function Reviews() {
    const [reviews, setReviews] = React.useState([]);

    const [average, setAverage] = React.useState(0);

    useEffect(async () => {
        setReviews(await getReviews());
        setAverage(await getRatingsAverage());
    },
    []);

    return (
        <div className={"body"}>

            <div>
                <h1 className={"title"}> Note globale </h1>
                <Rating value={average} precision={0.1} readOnly size="large"/>
            </div>

            <hr className={"separator"}/>

            <div className={"container"}>

                <Grid justifyContent="center" container spacing={2}>
                    
                {reviews.map(review => 

                    
                    <Grid item xs={5}>
                        <Card sx={{ Width: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image= {{logo} && review.pictureURL}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {review.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {review.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <div className="BottomCard">
                                    <Typography gutterBottom variant="h7" component="div">
                                    {new Date(review.creationDate).toLocaleString()}
                                    </Typography>
                                    <Rating value={review.averageScore} precision="0.5" readOnly/>
                                    </div>
                            </CardActions>
                        </Card>
                        </Grid>
                    //</div>  

                    )}
                    
                </Grid>

            </div>

        </div>
    );
}