import React from 'react'
import './MainImage/MainImage.css';
import '../../style/font/font.css';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MainPageNumber } from '../../store/MainPageNumber';
import { BackgroundImage, ImageBoxWrapper, MainLayout } from './FirstPageImage';
import SecondBG from '../../assets/images/mainpage/2.webp';
import SecondTitle from '../../assets/images/mainpage/Asset 89.webp';
import Triangle from '../../assets/images/mainpage/Asset 88.webp';
import Bar from '../../assets/images/mainpage/Asset 87.webp';

interface SecondPageImageProps {
    mainPageTextChange: Function;
};

const SecondPageImage : React.FC<SecondPageImageProps> = ({ mainPageTextChange }) => {

    const scrollIndex = useRecoilValue(MainPageNumber);

    let titleArr : any = [];
    const secondPageTitle : string = "ABOUT US:";
    for (let i = 0; i < secondPageTitle.length; i++) {
        titleArr.push({
            title: secondPageTitle[i],
            key: i
        });
    };
    console.log("두번째 슬라이드 타이틀 -> ", titleArr);

    return (
        <ImageBoxWrapper>
            <BackgroundImage src={SecondBG} alt=''/>
            <SecondMainLayout>
                <TriangleContainer src={Triangle} alt=''/>
                <SecondPageTitle>
                    {titleArr?.map((item : any, index : number) => {
                        return (
                            (item?.title === " ")
                                ? <EmptyTitle
                                    key={item?.key}
                                    className={(scrollIndex === 2) ? "second-title" : ""}
                                    style={{
                                        animationDelay: `${0.8 + index * 0.07}s`,
                                    }}/>
                                : <TitleText
                                    key={item?.key}
                                    className={(scrollIndex === 2) ? "second-title" : ""}
                                    style={{
                                        animationDelay: `${0.8 + index * 0.07}s`,
                                    }}>
                                    {item?.title}
                                </TitleText>
                        )
                    })}
                </SecondPageTitle>
                <BarContainer src={Bar} alt='' className={(scrollIndex === 2) ? "second-bar" : ""}/>
                <SecondPageContentContainer className={(scrollIndex === 2) ? "second-content" : ""}>
                    <SecondPageContent>
                        <Text>{mainPageTextChange(0)}</Text>
                        <ColorText>
                            {mainPageTextChange(1)}
                        </ColorText>
                        <Text>{mainPageTextChange(2)}</Text>
                    </SecondPageContent>
                    <SecondPageContent>
                        <Text>{mainPageTextChange(3)}</Text>
                        <ColorText>
                            {mainPageTextChange(4)}
                        </ColorText>
                    </SecondPageContent>
                    <SecondPageContent style={{marginTop: "24px"}}>
                        <Text>{mainPageTextChange(5)}</Text>
                    </SecondPageContent>
                    <SecondPageContent>
                        <Text>{mainPageTextChange(6)}</Text>
                        <ColorText>
                            {mainPageTextChange(7)}
                        </ColorText>
                    </SecondPageContent>
                </SecondPageContentContainer>
            </SecondMainLayout>
        </ImageBoxWrapper>
    )
};

const SecondImageBoxWrapper = styled(ImageBoxWrapper)`

    @media screen and (max-width: 500px) {
        
    }
`;

const SecondMainLayout = styled(MainLayout)`

    @media screen and (max-width: 500px) {
        
    }
`;

const TriangleContainer = styled.img`
    width: 100px;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 34%;
    left: 0;

    @media screen and (max-width: 1320px) {
        width: 80px;
        top: 30%;
    }

    @media screen and (max-width: 836px) {
        width: 60px;
        top: 25%;
    }
`;

const SecondPageTitle = styled.div`
    position: absolute;
    top: 28%;
    left: 16%;
    display: flex;
    align-items: center;
    user-select: none;

    @media screen and (max-width: 1320px) {
        top: 25%;
    }

    @media screen and (max-width: 836px) {
        top: 20%;
    }
`;

export const TitleText = styled.span`
    font-family: "CinzelRegular";
    font-size: 70px;
    font-weight: 600;
    line-height: normal;
    opacity: 0;

    @media screen and (max-width: 1320px) {
        font-size: 60px;
    }

    @media screen and (max-width: 836px) {
        font-size: 50px;
    }
`;

export const EmptyTitle = styled.div`
    min-width: 40px;
    opacity: 0;

    @media screen and (max-width: 1320px) {
        min-width: 30px;
    }

    @media screen and (max-width: 836px) {
        min-width: 20px;
    }
`;

const SecondPageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    position: absolute;
    top: 47%;
    left: 24%;
    opacity: 0;

    @media screen and (max-width: 1320px) {
        top: 40%;
        left: 20%;
    }

    @media screen and (max-width: 836px) {
        top: 32%;
        left: 16%;
    }
`;

const SecondPageContent = styled.div`
    font-family: "ZingRustDemo";
    font-size: 30px;
    font-weight: 400;
    line-height: normal;
    color: #FCFCFC;
    user-select: none;
    text-align: left;
    display: flex;
    gap: 10px;

    @media screen and (max-width: 1320px) {
        font-size: 22px;
        gap: 8px;
    }

    @media screen and (max-width: 836px) {
        font-size: 14px;
        gap: 3px;
    }
`;

const Text = styled.div`
    color: #FFFFFF;
`;

const ColorText = styled.div`
    color: #ff3ea3;
`;

const BarContainer = styled.img`
    width: 4px;
    height: 52%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 22%;
    opacity: 0;

    @media screen and (max-width: 1320px) {
        left: 18%;
        height: 59%;
    }

    @media screen and (max-width: 836px) {
        left: 14%;
        height: 68%;
    }
`;

export default SecondPageImage;