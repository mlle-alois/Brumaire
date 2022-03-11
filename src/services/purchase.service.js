import {API_URL, sendPostRequest} from "./http-request.service";

export const sendPurchase = async (firstname, lastname, email) => {
    return (await sendPostRequest(API_URL + "buyers", {firstname, lastname, email})).body;
};
