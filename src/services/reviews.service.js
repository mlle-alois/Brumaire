import {API_URL, sendGetRequest} from "./http-request.service";

export const getReviews = async () => {
    return (await sendGetRequest(API_URL + "evaluation")).json();
};