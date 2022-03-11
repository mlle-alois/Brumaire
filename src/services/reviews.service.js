import {sendGetRequest} from "./http-request.service";

export const getReviews = async () => {
    return (await sendGetRequest(process.env.API_URL + "evaluation")).json();
};