import React, { useState, useRef, useEffect, ReactEventHandler } from 'react';
import styled from 'styled-components';
import Image from '../assets/images/mainimage.jpg';
import MainBackground from '../assets/images/mainimage2.jpg';
import MainLogo from '../assets/logos/mainlogo.png';
import MainBG from '../assets/images/sanpatimainbackground.png';
import MainBGUnder from '../assets/images/sanpatimainbackgroundunder.png';
import MainImage from '../components/HomePage/MainImage/MainImage';
import MainCharactor from '../assets/images/maincharactorimage.png';
import '../components/HomePage/MainImage/MainImage.css';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { PiArrowFatLinesDownLight, PiArrowFatLinesUpLight } from 'react-icons/pi';
// import { PiArrowFatLinesUpLight } from 'react-icons/pi';
// import MyVideo from '../assets/videos/video.mp4';

const DIVIDER_HEIGHT = 5;

const Home = () => {

    const language = useRecoilValue(translate);
    const outerDivRef = useRef<HTMLDivElement>(null);
    const [scrollIndex, setScrollIndex] = useState<number>(1);

    type TextType = {
        englishtext: string,
        japanesetext: string,
        text: string
    }

    const mainPageText : TextType[] = [
        {
            englishtext: "",
            japanesetext: "",
            text: "는"
        },
        {
            englishtext: "We will establish a global illustration academy platform where you can learn about different painting cultures of the East and the West in one place,",
            japanesetext: "東洋と西洋の異なる絵画文化を一ヶ所で学べるグローバルイラストアカデミープラットフォームを構築し,",
            text: "동서양의 다른 그림 문화를 한곳에서 배울 수 있는 글로벌 일러스트 아카데미 플랫폼을 설립하여,"
        },
        {
            englishtext: "create a space where you can learn from various artists around the world regardless of nationality.",
            japanesetext: "国籍に関係なく世界の多様な作家に学べる空間を作ります。",
            text: "국적에 구애받지 않고 전세계 다양한 작가님들에게 배움을 얻을수 있는 공간을 만들겠습니다."
        },
        {
            englishtext: "See more",
            japanesetext: "詳細を見る",
            text: "자세히 보기"
        },
        {
            englishtext: "Going to see an instructor",
            japanesetext: "講師を見に行く",
            text: "강사 보러가기"
        }
    ];

    const mainPageTextHanlder = (Num : number) => {
        switch (language) {
            case "english" :
                return mainPageText[Num]?.englishtext;
            case "japanese" :
                return mainPageText[Num]?.japanesetext;
            default :
                return mainPageText[Num]?.text;
        }
    };

    useEffect(() => {
        const wheelEventHandler = (e : any) => {
            if (outerDivRef.current) {
                const { deltaY } = e;
                const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
                const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

                if (deltaY > 0) {
                    // 스크롤 내릴 때
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                    };
                } else {
                    // 스크롤 올릴 때
                    if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                    } else {
                    //현재 2페이지
                    console.log("현재 2페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                    }
                }
                }
            };
    if (outerDivRef.current) {
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelEventHandler);
        return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelEventHandler);
        };
    };
    
  }, []);
  return (
    <MainLayout>
        <MainImageContainer>
            <ImageWrapper ref={outerDivRef}>
                <ImageBoxWrapper>
                    <GradientContainer className={(scrollIndex === 1) ? "GradientContainer" : ""}/>
                    <ArrowIcon
                        style={{bottom: "3%", color: "#FCFCFC"}}
                        className={(scrollIndex === 1) ? "DownArrow" : ""}>
                        <PiArrowFatLinesDownLight />
                    </ArrowIcon>
                    <TextContainer>
                        <MainTitleImage
                            src={MainLogo}
                            className={(scrollIndex === 1) ? "MainTitle" : ""}/>
                        {/* <MainText>Aria</MainText> */}
                        <MainContent className={(scrollIndex === 1) ? "MainContent" : ""}>
                            {mainPageTextHanlder(1)}
                        </MainContent>
                        <MainContent className={(scrollIndex === 1) ? "MainSecondContent" : ""}>
                        {mainPageTextHanlder(2)}
                        </MainContent>
                    </TextContainer>
                    {/* <ObjectImage src={MainCharactor}/> */}
                    <Images src={MainBG}/>
                </ImageBoxWrapper>
                <ImageBoxWrapper>
                    <GradientContainer />
                    <ArrowIcon
                        style={{top: "10%"}}
                        className={(scrollIndex === 2) ? "UpArrow" : ""}>
                        <PiArrowFatLinesUpLight />
                    </ArrowIcon>
                    <ButtonWrapper>
                        <Button
                            style={{width: "600px"}}
                            className={(scrollIndex === 2) ? "Button" : ""}>
                            {mainPageTextHanlder(3)}
                        </Button>
                        <Button
                            style={{width: "550px"}}
                            className={(scrollIndex === 2) ? "SecondButton" : ""}>
                            {mainPageTextHanlder(4)}
                        </Button>
                    </ButtonWrapper>
                    <ObjectImage
                        className={(scrollIndex === 2) ? "CharactorImage" : "NoneCharactorImage"}
                        src={MainCharactor}/>
                    <Images src={MainBGUnder}/>   
                </ImageBoxWrapper>
            </ImageWrapper>
        </MainImageContainer>
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    /* padding: 0px 0px; */
    overflow-y: hidden;
    position: relative;
    display: grid;
    justify-content: center;
    z-index: 97;
`;

const MainImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* margin-top: 80px; */
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    overflow-y: auto;
    background-color: black;
    /* position: absolute;
    top: 0;
    left: 0; */

    ::-webkit-scrollbar {
        display: none;
    }
`;

const GradientContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000ac;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 96;
    opacity: 0;
`;

const ImageBoxWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const Images = styled.img`
    width: 100%;
    object-fit: cover;
    /* background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; */
    /* position: relative; */
    @media screen and (max-width: 1500px) {
        height: 100vh;
    }
`;

const ObjectImage = styled.div<{ src : string }>`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
`;

const TextContainer = styled.div`
    width: 60%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Pretendard";
    gap: 60px;
    /* background-color: #e9e9e9; */
    position: absolute;
    top: 20%;
    left: 20%;
    z-index: 97;
    user-select: none;

    @media screen and (max-width: 500px) {
        width: 90%;
        top: 15%;
        left: 5%;
        gap: 80px;
    }
`;

const MainTitleImage = styled.img`
    width: 400px;
    height: auto;
    object-fit: cover;
    opacity: 0;
    user-select: none;

    @media screen and (max-width: 500px) {
        width: 300px;
    }
`;

const MainText = styled.div`
    font-size: 80px;
    font-weight: 700;
    line-height: 150%;
    color: #FCFCFC;
`;

const MainContent = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 140%;
    color: #FCFCFC;
    opacity: 0;
    display: flex;

    @media screen and (max-width: 1000px) {
        font-size: 28px;
    }

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`;

const ButtonWrapper = styled.div`
    width: 700px;
    position: absolute;
    top: 40%;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 16px;
    z-index: 97;
    user-select: none;
`;

const Button = styled.div`
    height: 80px;
    background-color: #4444ac;
    color: #FCFCFC;
    border-radius: 10px 0px 0px 10px;
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(48, 52, 54, 0.726) 2px 2px 6px 1px;
    opacity: 0;
    cursor: pointer;

    &:hover {
        font-size: 33px;
        transform: scale(1.02);
        background-color: #333396;
    }
`;

const ArrowIcon = styled.div`
    width: 100px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 100px;
    color: #222020;
    position: absolute;
    left: 48%;
    z-index: 97;
    opacity: 0;

    @media screen and (max-width: 836px) {
        display: none;
    }
`;

export default Home;