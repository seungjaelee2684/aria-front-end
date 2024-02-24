import instance from "./instance";

// 공지사항 전체 조회 api
export const getNoticeListApi = async (page : number, noticeStatus : string) => {
    const res = await instance.get(`/api/notice?page=${page}&size=16&noticestatus=${noticeStatus}`);
    return res;
};

// 공지사항 상세 조회 api
export const getNoticeInfoApi = async (noticeId : string | undefined) => {
    const res = await instance.get(`/api/notice/${noticeId}`);
    return res;
};