import CurriculumHome from '../assets/curriculums/curriculumhome.webp';
import CurriculumYoutube from '../assets/curriculums/curriculumyoutube.webp';
import CurriculumTwitter from '../assets/curriculums/curriculumtwitter.webp';
import CurriculumInsta from '../assets/curriculums/curriculuminstagram.webp';
import CurriculumArtstation from '../assets/curriculums/curriculumartstation.webp';
import CurriculumPixiv from '../assets/curriculums/curriculumpixiv.webp';
import CurriculumDefaultHome from '../assets/curriculums/curriculumdefaulthome.webp';
import CurriculumDefaultYoutube from '../assets/curriculums/curriculumdefaultyoutube.webp';
import CurriculumDefaultTwitter from '../assets/curriculums/curriculumdefaulttwitter.webp';
import CurriculumDefaultInsta from '../assets/curriculums/curriculumdefaultinstagram.webp';
import CurriculumDefaultArtstation from '../assets/curriculums/curriculumdefaultartstation.webp';
import CurriculumDefaultPixiv from '../assets/curriculums/curriculumdefaultpixiv.webp';
import SanpatiThumbnail from '../assets/curriculums/sanpati/sanpati_thumbnail.webp';
import SanpatiSlideBack from '../assets/images/mentorimage.webp';
import SanpatiSlideNick from '../assets/images/mentorimagetext.webp';
import SanpatiCurriculum1 from '../assets/curriculums/sanpati/sanpaticurriculum1.png';
import SanpatiCurriculum2 from '../assets/curriculums/sanpati/sanpaticurriculum2.png';
import SanpatiCurriculum3 from '../assets/curriculums/sanpati/sanpaticurriculum3.png';
import SanpatiCurriculum4 from '../assets/curriculums/sanpati/sanpaticurriculum4.png';
import SanpatiCurriculum5 from '../assets/curriculums/sanpati/sanpaticurriculum5.png';
import SanpatiCurriculum6 from '../assets/curriculums/sanpati/sanpaticurriculum6.png';
import EscapeThumbnail from '../assets/curriculums/escape/Thumbnail_escape.webp';
import EscapeSlideBack from '../assets/curriculums/escape/banner_escape_01.webp';
import EscapeSlideNick from '../assets/curriculums/escape/banner_escape_02.webp';
import EscapeCurriculumEN1 from '../assets/curriculums/escape/curriculum_escape_01.webp';
import EscapeCurriculumEN2 from '../assets/curriculums/escape/curriculum_escape_02.webp';
import EscapeCurriculumEN3 from '../assets/curriculums/escape/curriculum_escape_03.webp';
import EscapePortfolio1 from '../assets/curriculums/escape/portfolio/p01.webp';
import EscapePortfolio2 from '../assets/curriculums/escape/portfolio/p02.webp';
import EscapePortfolio3 from '../assets/curriculums/escape/portfolio/p03.webp';
import EscapePortfolio4 from '../assets/curriculums/escape/portfolio/p04.webp';
import EscapePortfolio5 from '../assets/curriculums/escape/portfolio/p05.webp';
import EscapePortfolio6 from '../assets/curriculums/escape/portfolio/p06.webp';
import EscapePortfolio7 from '../assets/curriculums/escape/portfolio/p07.webp';
import EscapePortfolio8 from '../assets/curriculums/escape/portfolio/p08.webp';
import EscapePortfolio9 from '../assets/curriculums/escape/portfolio/p09.webp';
import EscapePortfolio10 from '../assets/curriculums/escape/portfolio/p10.webp';
import EscapePortfolio11 from '../assets/curriculums/escape/portfolio/p11.webp';
import EscapePortfolio12 from '../assets/curriculums/escape/portfolio/p12.webp';

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
            status: "Left",
            background: SanpatiSlideBack,
            nickname: SanpatiSlideNick
        },
        portfolio: [

        ],
        content: {
            englishcontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
                SanpatiCurriculum4,
                SanpatiCurriculum5,
                SanpatiCurriculum6
            ],
            chinesecontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
                SanpatiCurriculum4,
                SanpatiCurriculum5,
                SanpatiCurriculum6
            ],
            japanesecontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
                SanpatiCurriculum4,
                SanpatiCurriculum5,
                SanpatiCurriculum6
            ],
            koreancontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
                SanpatiCurriculum4,
                SanpatiCurriculum5,
                SanpatiCurriculum6
            ],
        },
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
        image: SanpatiThumbnail
    },
    {
        id: "2",
        nation: "Japanese",
        englishname: "Escape",
        chinesename: "伊斯凯普",
        japanesename: "エスケープ",
        nickname: "이스케이프",
        isnew: true,
        slideimage: {
            status: "Left",
            background: EscapeSlideBack,
            nickname: EscapeSlideNick
        },
        portfolio: [
            EscapePortfolio1,
            EscapePortfolio2,
            EscapePortfolio3,
            EscapePortfolio4,
            EscapePortfolio5,
            EscapePortfolio6,
            EscapePortfolio7,
            EscapePortfolio8,
            EscapePortfolio9,
            EscapePortfolio10,
            EscapePortfolio11,
            EscapePortfolio12,
        ],
        content: {
            englishcontent: [
                EscapeCurriculumEN1,
                EscapeCurriculumEN2,
                EscapeCurriculumEN3
            ],
            chinesecontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
                SanpatiCurriculum4,
                SanpatiCurriculum5,
                SanpatiCurriculum6
            ],
            japanesecontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
                SanpatiCurriculum4,
                SanpatiCurriculum5,
                SanpatiCurriculum6
            ],
            koreancontent: [
                EscapeCurriculumEN1,
                EscapeCurriculumEN2,
                EscapeCurriculumEN3
            ],
        },
        sns: [
            {
                icon: CurriculumDefaultHome,
                link: ""
            },
            {
                icon: CurriculumDefaultYoutube,
                link: ""
            },
            {
                icon: CurriculumTwitter,
                link: "https://twitter.com/esukeipu001"
            },
            {
                icon: CurriculumDefaultInsta,
                link: ""
            },
            {
                icon: CurriculumDefaultArtstation,
                link: ""
            },
            {
                icon: CurriculumPixiv,
                link: "https://www.pixiv.net/users/58851418"
            }
        ],
        image: EscapeThumbnail
    },
];