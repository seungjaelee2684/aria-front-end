import { atom } from "recoil";

interface MentorImageType {
    banner_image: string | null;
    nickname_image: string | null;
    thumbnail_image: string | null;
    curriculum_image: string | null[];
    portfolio_image: string | null[];
}

export const mentorInfoUpload = atom({
    key: "mentorInfo",
    default: {
        englishname: "",
        chinesename: "",
        japanesename: "",
        nickname: "",
        nation: "America",
        opendate: ""
    }
});

export const mentorImageUpload = atom<MentorImageType>({
    key: "mentorImage",
    default: {
        banner_image: null,
        nickname_image: null,
        thumbnail_image: null,
        curriculum_image: [],
        portfolio_image: []
    }
});

export const snsLinkUpload = atom({
    key: "snsLink",
    default: {
        home: "",
        youtube: "",
        twitter: "",
        instagram: "",
        artstation: "",
        pixiv: ""
    }
});