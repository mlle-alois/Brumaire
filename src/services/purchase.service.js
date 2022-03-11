import {sendPostRequest} from "./http-request.service";

export const sendPurchase = async (firstname, lastname, email) => {
    return (await sendPostRequest(process.env.API_URL + "buyers", {firstname, lastname, email})).body;
};
