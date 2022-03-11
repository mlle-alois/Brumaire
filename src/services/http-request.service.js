export const sendGetRequest = async (url) => {
    return fetch(url);
};

export const sendFormDataPostRequest = async (url, body, token) => {
    return fetch(url, {
        method: "POST",
        body,
        headers: {
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