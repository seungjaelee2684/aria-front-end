import Image from '../assets/images/mentorimage.webp';
import Image2 from '../assets/images/mentorimage2.webp';
import Image3 from '../assets/images/rapla2.png'
import Image4 from '../assets/images/lineimage.png';
import MentorNickname from '../assets/images/mentorimagetext.webp';
import { mentorListData } from './MentorData';

export const NewMentorListData = mentorListData?.filter((item : any) => item?.isnew === true);

// export const NewMentorListData = [
//     {
//         id: "1",
//         nation: "language",
//         englishname: "MinGyu",
//         nickname: "민규",
//         content: "",
//         image: Image,
//         nickimage: MentorNickname,
//         status: ""
//     },
//     {
//         id: "2",
//         nation: "Korean",
//         englishname: "Shal.E",
//         nickname: "샬e",
//         content: "",
//         image: Image2,
//         nickimage: MentorNickname,
//         status: "Left"
//     },
//     {
//         id: "3",
//         nation: "Korean",
//         englishname: "Chan",
//         nickname: "챤",
//         content: "",
//         image: Image,
//         nickimage: MentorNickname,
//         status: ""
//     },
//     {
//         id: "4",
//         nation: "Korean",
//         englishname: "Shumolly",
//         nickname: "슈몰리",
//         content: "",
//         image: Image2,
//         nickimage: MentorNickname,
//         status: "Left"
//     },
// ];