import { atom } from "recoil";

export const nationKind = atom({
    key: "NationKind",
    default: {
        englishpick: "All Country",
        chinesepick: "所有国家",
        japanesepick: "すべての国",
        pick: "모든 국가"
    }
});

export const nationFlag = atom({
    key: "nationFlag",
    default: ""
});