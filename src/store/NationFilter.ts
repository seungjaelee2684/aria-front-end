import { atom } from "recoil";

export const nationKind = atom({
    key: "NationKind",
    default: "All"
});

export const nationFlag = atom({
    key: "nationFlag",
    default: ""
});