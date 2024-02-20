import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.response.use(
    (response) => {
        if (response.status === 201) {
            localStorage.removeItem("Authorization");
        }
        if (response.status === 401) {
            localStorage.removeItem("Authorization");
            alert("운영자 모드 제한시간이 만료되었습니다.");
            window.location.replace("/");
        }
        return response;
    },

    // accessToken 만료시 refreshToke으로 재발급 처리
    // refreshToken api 나오면 수정될수도 있음
    (error) => {
        const {
            response: { status },
        } = error;
        if (status === 201) {
            localStorage.removeItem("Authorization");
        }
        if (status === 401) {
            localStorage.removeItem("Authorization");
            alert("운영자 모드 제한시간이 만료되었습니다.");
            window.location.replace("/");
        }
        return Promise.reject(error);
    }
);

// // 인터셉터 리퀘스트 토큰 헤더에싣기
instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("Authorization");

        if (accessToken) {
            config.headers["Authorization"] = accessToken;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;