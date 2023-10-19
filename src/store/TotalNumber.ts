import { atom } from "recoil";
import { eventPosterData } from "../data/EventPosterData";

export const eventTotal = atom({
    key: "eventTotal",
    default: `${eventPosterData.length}`
});