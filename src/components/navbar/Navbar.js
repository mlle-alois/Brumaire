import './Navbar.css';
import {Button} from "@mui/material";
import {goToFAQ, goToPurchase, goToRatings, goToReviews} from "../../services/routing.service";

export function Navbar() {
    return (
        <div className="background">
            Brumaire
            <Button variant="contained" onClick={goToRatings}>Ratings</Button>
            <Button variant="contained" onClick={goToReviews}>Reviews</Button>
            <Button variant="contained" onClick={goToFAQ}>FAQ</Button>
            <Button variant="contained" onClick={goToPurchase}>Purchase</Button>
        </div>
    );
}