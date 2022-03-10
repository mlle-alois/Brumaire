import {useEffect} from "react";
import {getReviews} from "../../services/reviews.service";

export function Reviews() {
    useEffect(async () => {
        const reviews = await getReviews();
        console.log(reviews);
    });

    return (<>
        Reviews
    </>);
}