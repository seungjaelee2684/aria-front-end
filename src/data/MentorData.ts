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
import SanpatiSlideBack from '../assets/curriculums/sanpati/banner_sanpati_01.webp';
import SanpatiSlideNick from '../assets/curriculums/sanpati/banner_sanpati_02.webp';
import SanpatiCurriculum1 from '../assets/curriculums/sanpati/curriculum_sanpati_01.webp';
import SanpatiCurriculum2 from '../assets/curriculums/sanpati/curriculum_sanpati_02.webp';
import SanpatiCurriculum3 from '../assets/curriculums/sanpati/curriculum_sanpati_03.webp';
import SanpatiPortfolio1 from '../assets/curriculums/sanpati/portfolio/p01.webp';
import SanpatiPortfolio2 from '../assets/curriculums/sanpati/portfolio/p02.webp';
import SanpatiPortfolio3 from '../assets/curriculums/sanpati/portfolio/p03.webp';
import SanpatiPortfolio4 from '../assets/curriculums/sanpati/portfolio/p04.webp';
import SanpatiPortfolio5 from '../assets/curriculums/sanpati/portfolio/p05.webp';
import SanpatiPortfolio6 from '../assets/curriculums/sanpati/portfolio/p06.webp';
import SanpatiPortfolio7 from '../assets/curriculums/sanpati/portfolio/p07.webp';
import SanpatiPortfolio8 from '../assets/curriculums/sanpati/portfolio/p08.webp';
import SanpatiPortfolio9 from '../assets/curriculums/sanpati/portfolio/p09.webp';
import SanpatiPortfolio10 from '../assets/curriculums/sanpati/portfolio/p10.webp';
import SanpatiPortfolio11 from '../assets/curriculums/sanpati/portfolio/p11.webp';
import SanpatiPortfolio12 from '../assets/curriculums/sanpati/portfolio/p12.webp';
import SanpatiPortfolio13 from '../assets/curriculums/sanpati/portfolio/p13.webp';
import SanpatiPortfolio14 from '../assets/curriculums/sanpati/portfolio/p14.webp';
import SanpatiPortfolio15 from '../assets/curriculums/sanpati/portfolio/p15.webp';
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
        nation: "Japan",
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
            SanpatiPortfolio1,
            SanpatiPortfolio2,
            SanpatiPortfolio3,
            SanpatiPortfolio4,
            SanpatiPortfolio5,
            SanpatiPortfolio6,
            SanpatiPortfolio7,
            SanpatiPortfolio8,
            SanpatiPortfolio9,
            SanpatiPortfolio10,
            SanpatiPortfolio11,
            SanpatiPortfolio12,
            SanpatiPortfolio13,
            SanpatiPortfolio14,
            SanpatiPortfolio15
        ],
        content: {
            englishcontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
            ],
            chinesecontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
            ],
            japanesecontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
            ],
            koreancontent: [
                SanpatiCurriculum1,
                SanpatiCurriculum2,
                SanpatiCurriculum3,
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
                link: "https://twitter.com/hatizyuusan"
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
                icon: CurriculumDefaultPixiv,
                link: ""
            }
        ],
        image: SanpatiThumbnail
    },
    {
        id: "2",
        nation: "Japan",
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
                EscapeCurriculumEN1,
                EscapeCurriculumEN2,
                EscapeCurriculumEN3
            ],
            japanesecontent: [
                EscapeCurriculumEN1,
                EscapeCurriculumEN2,
                EscapeCurriculumEN3
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