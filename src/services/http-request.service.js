export const API_URL = 'http://localhost:3000/';

export const sendGetRequest = async (url) => {
    return fetch(url);
};

export const sendFormDataPostRequest = async (url, body, token) => {
    return fetch(url, {
        method: "POST",
        body,
        headers: {
            "Content-type": "multipart/form-data; charset=UTF-8",
            "Authorization": `Bearer ${token}`
        }
    });
}

export const sendPostRequest = async (url, body) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}