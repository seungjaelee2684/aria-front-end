import { atom } from "recoil";

interface MentorImageType {
    banner_image: string | undefined;
    nickname_image: string | undefined;
    thumbnail_image: string | undefined;
    curriculum_image: File[];
    portfolio_image: File[];
}

export const mentorInfoUpload = atom({
    key: "mentorInfo",
    default: {
        englishname: "",
        japanesename: "",
        nickname: "",
        nation: "America",
        opendate: ""
    }
});

export const mentorImageUpload = atom<MentorImageType>({
    key: "mentorImage",
    default: {
        banner_image: undefined,
        nickname_image: undefined,
        thumbnail_image: undefined,
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