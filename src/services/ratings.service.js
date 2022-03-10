import {API_URL, sendFormDataPostRequest, sendGetRequest} from "./http-request.service";

export const sendRatings = async (title, content, autonomyScore, deliveryScore, handlingScore, image, token) => {
    const data = new URLSearchParams();
    data.append("strTitle", title);
    data.append("strContent", content);
    data.append("intAutonomyScore", autonomyScore);
    data.append("intDeliveryScore", deliveryScore);
    data.append("intHandlingScore", handlingScore);
    data.append("intHandlingScore", handlingScore);
    data.append("picture", image);
    return (await sendFormDataPostRequest(API_URL + "evaluation", data, token)).body;
};

export const getRatingsAverage = async () => {
    return (await sendGetRequest(API_URL + "evaluation/average")).body;
};