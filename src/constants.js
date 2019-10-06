const localhost = "http://127.0.0.1:8000";

const apiURL = "/api";

export const endpoint = `${localhost}${apiURL}`;



export const jobListURL = `${endpoint}/`;
export const jobDetailURL = id => `${endpoint}/${id}`;


