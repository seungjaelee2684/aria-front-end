import instance from "./instance";

// 강사 전체조회 api
interface getMentorsApiType {
    page: number;
    nation: string;
    search: string | null;
};

export const getMentorsApi = async ({ page, nation, search } : getMentorsApiType) => {
    const res = await instance.get(`/api/mentors?page=${page}&size=16&nationstatus=${nation}${search}`);
    return res;
};

// 강사 상세조회 api
export const getMentorDetailApi = async (mentorsId : string | undefined) => {
    const res = await instance.get(`/api/mentors/${mentorsId}`);
    return res;
};

// 강사 정보조회 api
export const getMentorInfoApi = async (mentorsId: string | undefined) => {
    const res = await instance.get(`/api/update/mentor/${mentorsId}`);
    return res;
};

// 강사 업로드 api
export const postMentorUploadApi = async (body: FormData) => {
    const res = await instance.post(`/api/mentors/upload`, body, {
        headers: { "Content-Type": "multipart/form-data" }
    });
    return res;
};