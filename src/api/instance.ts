import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.response.use(
    (response) => {
        if (response.headers) {};

        return response;
    }
);

export default instance;