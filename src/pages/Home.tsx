import React, { useState, useRef, useEffect, ReactEventHandler } from 'react';
import styled from 'styled-components';
import '../style/font/font.css';
import Image from '../assets/images/mainimage.jpg';
import MainBackground from '../assets/images/mainimage2.jpg';
import MainLogo from '../assets/logos/mainlogo.png';
import MainBG from '../assets/images/sanpatimainbackground.png';
import MainBGUnder from '../assets/images/sanpatimainbackgroundunder.png';
import MainImage from '../components/HomePage/MainImage/MainImage';
import MainCharactor from '../assets/images/maincharactorimage.png';
import '../components/HomePage/MainImage/MainImage.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { PiArrowFatLinesDownLight, PiArrowFatLinesUpLight } from 'react-icons/pi';
import { MainPageNumber } from '../store/MainPageNumber';
import Frame from '../assets/images/frame.png';
// import { PiArrowFatLinesUpLight } from 'react-icons/pi';
// import MyVideo from '../assets/videos/video.mp4';

const DIVIDER_HEIGHT = 5;

const Home = () => {

    const language = useRecoilValue(translate);
    const outerDivRef = useRef<HTMLDivElement>(null);
    const [scrollIndex, setScrollIndex] = useRecoilState(MainPageNumber);

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
        <PageBarOutContainer>
            <PageBarContainer>
                <PageNumberWrapper></PageNumberWrapper>
                <PageNumber />
                <PageBar></PageBar>
                <PageNumber />
            </PageBarContainer>
        </PageBarOutContainer>
        <MainImageContainer>
            <ImageWrapper ref={outerDivRef}>
                <ImageBoxWrapper>
                    <GradientContainer />
                    {/* <ArrowIcon
                        style={{top: "10%"}}
                        className={(scrollIndex === 2) ? "UpArrow" : ""}>
                        <PiArrowFatLinesUpLight />
                    </ArrowIcon> */}
                    {/* <ButtonWrapper>
                        <Button
                            style={{width: "600px"}}
                            className={(scrollIndex === 1) ? "Button" : ""}>
                            {mainPageTextHanlder(3)}
                        </Button>
                        <Button
                            style={{width: "550px"}}
                            className={(scrollIndex === 1) ? "SecondButton" : ""}>
                            {mainPageTextHanlder(4)}
                        </Button>
                    </ButtonWrapper> */}
                    <ObjectImage
                        className={(scrollIndex === 1) ? "CharactorImage" : "NoneCharactorImage"}
                        src={MainCharactor}/>
                    <Images src={MainBG}/>  
                </ImageBoxWrapper>
                <ImageBoxWrapper>
                    <GradientContainer className={(scrollIndex === 2) ? "GradientContainer" : ""}/>
                    {/* <ArrowIcon
                        style={{bottom: "3%", color: "#FCFCFC"}}
                        className={(scrollIndex === 2) ? "DownArrow" : ""}>
                        <PiArrowFatLinesDownLight />
                    </ArrowIcon> */}
                    <TextContainer>
                        <MainText
                            // src={MainLogo}
                            className={(scrollIndex === 2) ? "MainTitle" : ""}>
                                ARIA
                        </MainText>
                        {/* <MainText>Aria</MainText> */}
                        <MainContent className={(scrollIndex === 2) ? "MainContent" : ""}>
                            {mainPageTextHanlder(1)}
                        </MainContent>
                        <MainContent className={(scrollIndex === 2) ? "MainSecondContent" : ""}>
                            {mainPageTextHanlder(2)}
                        </MainContent>
                        <FrameBoxWrapper>
                            <FrameBox className={(scrollIndex === 2) ? "FirstFrame" : ""}>
                                <FrameContent>안녕</FrameContent>
                                <FrameImage src={Frame}/>
                            </FrameBox>
                            <FrameBox className={(scrollIndex === 2) ? "SecondFrame" : ""}>
                                <FrameContent></FrameContent>
                                <FrameImage src={Frame}/>
                            </FrameBox>
                            <FrameBox className={(scrollIndex === 2) ? "ThirdFrame" : ""}>
                                <FrameContent></FrameContent>
                                <FrameImage src={Frame}/>
                            </FrameBox>
                        </FrameBoxWrapper>
                    </TextContainer>
                    {/* <ObjectImage src={MainCharactor}/> */}
                    {/* <Images src={MainBG}/> */}
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
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    overflow-y: auto;
    background-color: #222020;
    /* position: absolute;
    top: 0;
    left: 0; */
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
    width: 40%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    gap: 40px;
    /* background-color: #e9e9e9; */
    position: absolute;
    top: 0;
    left: 30%;
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
    font-family: 'BMDOHYEON';
    font-size: 100px;
    font-weight: 700;
    line-height: 150%;
    color: #FCFCFC;
    text-shadow: 4px 4px 2px rgba(255, 255, 255, 0.5);
    opacity: 0;
`;

const MainContent = styled.div`
    width: 85%;
    font-family: 'IAMAPLAYER';
    font-size: 24px;
    font-weight: 600;
    line-height: 140%;
    color: #FCFCFC;
    opacity: 0;
    display: flex;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);

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

const PageBarOutContainer = styled.div`
    position: fixed;
    top: 48%;
    right: 2%;
    z-index: 98;
`;

const PageBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
`;

const PageNumberWrapper = styled.div`
    width: 22px;
    height: 22px;
    border: 2px solid #222020;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: all 0.5s ease-in-out;
    top: -5px;
    /* bottom: -5px; */
`;

const PageNumber = styled.div`
    width: 16px;
    height: 16px;
    background-color: #22202090;
    border-radius: 100%;
`;

const PageBar = styled.div`
    width: 4px;
    height: 30px;
    background-color: #ADADAD90;
    border-radius: 10px;
`;

const FrameBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
`;

const FrameBox = styled.div`
    width: 240px;
    height: 318px;
    position: relative;
    font-family: "BMDOHYEON";
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    color: #222020;
    background-color: #FCFCFC;
    opacity: 0;
`;

const FrameContent = styled.div`
    width: 98%;
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FrameImage = styled.img`
    width: 243px;
    height: auto;
    position: absolute;
    top: -2px;
    left: -1px;
    object-fit: cover;
`;

export default Home;