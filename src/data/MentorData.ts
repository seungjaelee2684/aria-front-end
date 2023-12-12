import Image from '../assets/images/surveimage.jpg';
import Image2 from '../assets/images/rapla1.png';
import Image3 from '../assets/images/rapla2.png';
import Image4 from '../assets/images/maincharactor.png';
import SanpachiImage from '../assets/images/sanpachiimage1.png';
import SanpachiImage2 from '../assets/images/sanpachiimage2.png';
import SanpatiCurriculum from '../assets/curriculums/sanpati/sanpaticurriculummain.jpg';
import SanpatiCurriculum1 from '../assets/curriculums/sanpati/sanpaticurriculum1.png';
import SanpatiCurriculum2 from '../assets/curriculums/sanpati/sanpaticurriculum2.png';
import SanpatiCurriculum3 from '../assets/curriculums/sanpati/sanpaticurriculum3.png';
import SanpatiCurriculum4 from '../assets/curriculums/sanpati/sanpaticurriculum4.png';
import SanpatiCurriculum5 from '../assets/curriculums/sanpati/sanpaticurriculum5.png';
import SanpatiCurriculum6 from '../assets/curriculums/sanpati/sanpaticurriculum6.png';
import EscapeThumbnail from '../assets/curriculums/escape/Thumbnail_escape.webp';
import EscapeSlideBack from '../assets/curriculums/escape/banner_escape_01.webp';
import EscapeSlideNick from '../assets/curriculums/escape/banner_escape_02.webp';
import EscapeCurriculum1 from '../assets/curriculums/escape/curriculum_escape_01.webp';
import EscapeCurriculum2 from '../assets/curriculums/escape/curriculum_escape_02.webp';
import EscapeCurriculum3 from '../assets/curriculums/escape/curriculum_escape_03.webp';
import CurriculumHome from '../assets/curriculums/curriculumhome.webp';
import CurriculumYoutube from '../assets/curriculums/curriculumyoutube.webp';
import CurriculumTwitter from '../assets/curriculums/curriculumtwitter.webp';
import CurriculumInsta from '../assets/curriculums/curriculuminstagram.webp';
import CurriculumArtstation from '../assets/curriculums/curriculumartstation.webp';
import CurriculumPixiv from '../assets/curriculums/curriculumpixiv.webp';

export const mentorListData = [
    {
        id: "1",
        nation: "Japanese",
        englishname: "Sanpati",
        chinesename: "圣帕蒂",
        japanesename: "さんぱち",
        nickname: "산파치",
        isnew: true,
        slideimage: {
            background: EscapeSlideBack,
            nickname: EscapeSlideNick
        },
        portfolio: [

        ],
        content: [
            // SanpatiCurriculum
            SanpatiCurriculum1,
            SanpatiCurriculum2,
            SanpatiCurriculum3,
            SanpatiCurriculum4,
            SanpatiCurriculum5,
            SanpatiCurriculum6
        ],
        sns: [
            {
                icon: CurriculumHome,
                link: ""
            },
            {
                icon: CurriculumYoutube,
                link: ""
            },
            {
                icon: CurriculumTwitter,
                link: ""
            },
            {
                icon: CurriculumInsta,
                link: ""
            },
            {
                icon: CurriculumArtstation,
                link: ""
            },
            {
                icon: CurriculumPixiv,
                link: ""
            }
        ],
        image: SanpachiImage
    },
    {
        id: "2",
        nation: "Japanese",
        englishname: "Escape",
        chinesename: "圣帕蒂",
        japanesename: "さんぱち",
        nickname: "이스케이프",
        isnew: true,
        slideimage: {
            background: EscapeSlideBack,
            nickname: EscapeSlideNick
        },
        portfolio: [

        ],
        content: [
            // SanpatiCurriculum
            EscapeCurriculum1,
            EscapeCurriculum2,
            EscapeCurriculum3
        ],
        sns: [
            {
                icon: CurriculumHome,
                link: ""
            },
            {
                icon: CurriculumYoutube,
                link: ""
            },
            {
                icon: CurriculumTwitter,
                link: ""
            },
            {
                icon: CurriculumInsta,
                link: ""
            },
            {
                icon: CurriculumArtstation,
                link: ""
            },
            {
                icon: CurriculumPixiv,
                link: ""
            }
        ],
        image: EscapeThumbnail
    },
];