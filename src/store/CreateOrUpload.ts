import { atom } from "recoil";

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

export const mentorImageUpload = atom({
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