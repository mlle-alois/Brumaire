import './Navbar.css';
import {Button} from "@mui/material";
import {goToFAQ, goToPurchase, goToRatings, goToReviews} from "../../services/routing.service";
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Navbar() {
    return (

        <div className="background">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{mr: 2, display: {xs: 'none', md: 'flex'}, marginRight: 10}}
                >
                    <img className={"img"} src={require('../../brumaire.png')} height="15" width="100" alt="logo"/>
                </Typography>


                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

                    {/*<Button
                    onClick={goToRatings}
                    sx={{
                        my: 2, color: 'black', display: 'block', font: "Montserrat, sans-serif"
                    }}
                > Ratings </Button>*/}
                    <Button
                        onClick={goToReviews}
                        sx={{
                            my: 2, color: 'black', display: 'block', font: "Montserrat, sans-serif"
                        }}> Evaluations </Button>
                    <Button
                        onClick={goToFAQ}
                        sx={{
                            my: 2, color: 'black', display: 'block', font: "Montserrat, sans-serif"
                        }}> FAQ </Button>
                    <Button
                        onClick={goToPurchase}
                        sx={{
                            my: 2, color: 'black', display: 'block', font: "Montserrat, sans-serif"
                        }}> Achat </Button>
                </Box>
            </Toolbar>
            {/* Brumaire
            <Button variant="contained" onClick={goToRatings}>Ratings</Button>
            <Button variant="contained" onClick={goToReviews}>Reviews</Button>
            <Button variant="contained" onClick={goToFAQ}>FAQ</Button>
            <Button variant="contained" onClick={goToPurchase}>Purchase</Button> */}
        </div>
    );
}
