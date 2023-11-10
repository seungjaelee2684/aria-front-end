import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import { MainPageNumber } from '../../store/MainPageNumber';
import MainWhiteLogo from '../../assets/logos/whitelogo.png';
import { mainPageText } from '../../languages/HomeTrans';
import FirstMainFrameImage from '../../assets/images/maincharacter.png';
import SecondMainFrameImage from '../../assets/images/maincharactorimage.png';
import ThirdMainFrameImage from '../../assets/images/rapla1.png';
import Frame from '../../assets/images/frame.png';
import MainBlackBG from '../../assets/images/mainblackbackground.jpg';

const SecondPageImage = () => {

    const language = localStorage.getItem("language");
    const scrollIndex = useRecoilValue(MainPageNumber);

    const mainPageTextHanlder = (Num : number) => {
        switch (language) {
            case "english" :
                return mainPageText[Num]?.englishtext;
            case "chinese" :
                return mainPageText[Num]?.chinesetext;
            case "japanese" :
                return mainPageText[Num]?.japanesetext;
            case "korean" :
                return mainPageText[Num]?.text;
            default :
                return mainPageText[Num]?.englishtext;
        }
    };

    return (
        <ImageBoxWrapper>
            <GradientContainer className={(scrollIndex === 2) ? "GradientContainer" : ""} />
            <TextContainer>
                <MainTitleImage
                    className={(scrollIndex === 2) ? "MainTitle" : ""}
                    src={MainWhiteLogo} />
                <MainSubTitle className={(scrollIndex === 2) ? "MainContent" : ""}>
                    GROBAL ART ACADEMY
                </MainSubTitle>
                <MainContent className={(scrollIndex === 2) ? "MainSecondContent" : ""}>
                    {mainPageTextHanlder(1)}
                </MainContent>
                <MainContent className={(scrollIndex === 2) ? "MainThirdContent" : ""}>
                    {mainPageTextHanlder(2)}
                </MainContent>
                <FrameBoxWrapper>
                    <FrameBox
                        className={(scrollIndex === 2) ? "FirstFrame" : ""}>
                        <FrameInFicture src={FirstMainFrameImage} />
                        <FrameContent className='FirstMainContent'>
                            수강 신청
                        </FrameContent>
                        <FrameImage src={Frame} />
                    </FrameBox>
                    <FrameBox className={(scrollIndex === 2) ? "SecondFrame" : ""}>
                        <FrameInFicture src={SecondMainFrameImage} />
                        <FrameContent className='SecondMainContent'>
                            디스코드
                        </FrameContent>
                        <FrameImage src={Frame} />
                    </FrameBox>
                    <FrameBox className={(scrollIndex === 2) ? "ThirdFrame" : ""}>
                        <FrameInFicture src={ThirdMainFrameImage} />
                        <FrameContent className='ThirdMainContent'>
                            운영정책
                        </FrameContent>
                        <FrameImage src={Frame} />
                    </FrameBox>
                </FrameBoxWrapper>
            </TextContainer>
            <Images src={MainBlackBG} />
        </ImageBoxWrapper>
    )
};

const ImageBoxWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 500px) {
        display: none;
    }
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

const TextContainer = styled.div`
    width: 40%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    gap: 50px;
    /* background-color: #e9e9e9; */
    position: absolute;
    top: 0;
    left: 30%;
    z-index: 97;
    user-select: none;

    @media screen and (max-width: 1320px) {
        width: 70%;
        top: 0;
        left: 15%;
        gap: 50px;
    }

    @media screen and (max-width: 500px) {
        width: 94%;
        top: 0;
        left: 3%;
        gap: 80px;
    }
`;

const MainTitleImage = styled.img`
    width: 240px;
    height: auto;
    object-fit: cover;
    opacity: 0;
    user-select: none;

    @media screen and (max-width: 500px) {
        width: 300px;
    }
`;

const MainSubTitle = styled.div`
    width: 100%;
    font-family: 'Jeongnimsaji-R';
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: #4596ff;
    opacity: 0;
    display: flex;
    justify-content: center;
    letter-spacing: 20px;
`;

const MainContent = styled.div`
    width: 70%;
    font-family: 'Jeongnimsaji-R';
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: #FCFCFC;
    opacity: 0;
    display: flex;
    justify-content: center;
    /* text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5); */

    @media screen and (max-width: 1320px) {
        font-size: 14px;
    }
`;

const FrameBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    cursor: pointer;

    @media screen and (max-width: 1320px) {
        gap: 16px;
    }
`;

const FrameBox = styled.div`
    width: 240px;
    height: 318px;
    position: relative;
    font-family: "IAMAPLAYER";
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    color: #FCFCFC;
    background-color: #FCFCFC;
    opacity: 0;
    box-shadow: 3px 3px 8px rgba(255, 255, 255, 0.582);

    @media screen and (max-width: 1320px) {
        width: 170px;
        height: 226px;
        font-size: 16px;
    }
`;

const FrameInFicture = styled.img`
    width: 240px;
    height: 318px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 1320px) {
        width: 170px;
        height: 226px;
    }
`;

const FrameContent = styled.div`
    width: 240px;
    height: 318px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2f6192c7;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1320px) {
        width: 170px;
        height: 226px;
    }
`;

const FrameImage = styled.img`
    width: 243px;
    height: auto;
    position: absolute;
    top: -2px;
    left: -1px;
    object-fit: cover;

    @media screen and (max-width: 1320px) {
        width: 173px;
    }
`;

export default SecondPageImage;