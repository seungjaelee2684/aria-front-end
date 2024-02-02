import instance from "./instance";

// 새로운 강사 배너조회 api
export const getNewMentorBannerApi = async () => {
    const res = await instance.get("/api/mentors/banner");
    return res;
};

// 강사 전체조회 api
interface getMentorsApiType {
    page: number;
    nation: string;
};

export const getMentorsApi = async ({ page, nation } : getMentorsApiType) => {
    const res = await instance.get(`/api/mentors?page=${page}&size=16&nationstatus=${nation}`);
    return res;
};

// 강사 상세조회 api
export const getMentorDetailApi = async (mentorsId : number) => {
    const res = await instance.get(`/api/mentors/${mentorsId}`);
    return res;
};