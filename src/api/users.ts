import instance from "./instance";

// 운영자 인증 api
interface postAuthorizationApiType {
    operateId: string;
    password: string;
};

export const postAuthorizationApi = async (body : postAuthorizationApiType) => {
    const res = await instance.post("/api/certification", body);
    return res;
};