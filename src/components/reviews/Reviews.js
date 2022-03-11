import * as React from 'react';
import {useEffect} from "react";
import {getReviews} from "../../services/reviews.service";
import {getRatingsAverage} from "../../services/ratings.service";
import '../reviews/Reviews.css'
import {Rating} from "@mui/material";
import user from './user.png';

export function Reviews() {
    const [reviews, setReviews] = React.useState([]);

    const [average, setAverage] = React.useState();

    useEffect(async () => {
        setReviews(await getReviews());
        console.log(reviews);
    },
    []);

    useEffect(async () => {
        setAverage(await getRatingsAverage());
        console.log(average);
    },
    []);

    return (
        <div className={"body"}>

            <div>
                <span className={"title"}> Evaluations global </span>
                <Rating value={5} precision={5}/>
            </div>

            <hr className={"separator"}/>

            {reviews.map(review => 

                <div className={"container"}>

                    <div className={"review"}>

                        <div className={"user_left"}> 
                            <div>
                                <img src={user} className={"user"}></img>
                                <br/>
                                <span> {new Date(review.creationDate.toString()).toUTCString()} </span>
                            </div> 
                        </div>
                        <div className={"details_right"}>  
                            <div>
                                <div className={"top"}>

                                    <Rating className={"rating"} value={review.averageScore} precision="0.5" readOnly/>
                                    <span className={"evaluation_title"}> {review.title} </span>

                                </div>

                                <div>

                                    <span className={"details"}> {review.content} </span>

                                </div>
                                {!!review.pictureURL && <img src={review.pictureURL} className={"imgRatings"}/>}
        
                            </div>
                        </div>
                    </div>

                </div>
                
            )}

        </div>
    );
}