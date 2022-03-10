import * as React from 'react';
import '../reviews/Reviews.css'
import {Rating} from "@mui/material";
import user from '../../images/user.png'; 

export function Reviews() {

    return (
        <div className={"body"}>
            <div>
                <span className={"title"}> Evaluations global </span>
                <Rating value={5} precision={5}/>
            </div>

            <hr className={"separator"}/>

            <div className={"container"}>

                <div className={"align_left"}>
                    <img src={user} className={"user"}></img>
                    <Rating className={"rating"} value={5} precision={5}/>
                    <span className={"evaluation_title"}> Qualité prix </span>
                </div>

                <div className={"align_right"}>

                    <table className={"table"}>

                        <tr>  
                            <td> 
                                <div className={"user_left"}>
                                    <img src={user} className={"user"}></img>
                                    <span> 10/02/2022 </span>
                                </div> 
                            </td>
                            <td>  
                                <div className={"details_right"}>
                                    <div className={"top"}>

                                        <Rating className={"rating"} value={5} precision={5}/>
                                        <span className={"evaluation_title"}> prix prix prix prix prix prix</span>

                                    </div>

                                    <div>

                                        <span className={"details"}>prix prix prix prix prix prix prix prix prix prix prix prix fnazacacancenvnzemm
                                        prix prix prix prix prix prix prix prix prix prix prix prix fnazacacancenvnzemm
                                        prix prix prix prix prix prix prix prix prix prix prix prix fnazacacancenvnzemm
                                        prix prix prix prix prix prix prix prix prix prix prix prix fnazacacancenvnzemm
                                        prix prix prix prix prix prix prix prix prix prix prix prix fnazacacancenvnzemm</span>

                                    </div>

                                </div>

                            </td>
                        </tr>

                    </table>

                </div>

            </div>

        </div>
    );
}
