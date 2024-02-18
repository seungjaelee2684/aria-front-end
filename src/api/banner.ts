import instance from "./instance";

// 새로운 강사 배너조회 api
export const getNewMentorBannerApi = async () => {
    const res = await instance.get("/api/banners/mentors");
    return res;
};