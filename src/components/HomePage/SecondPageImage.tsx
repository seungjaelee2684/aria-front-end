import React from 'react'
import './MainImage/MainImage.css';
import '../../style/font/font.css';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MainPageNumber } from '../../store/MainPageNumber';
import { BackgroundImage, ImageBoxWrapper, MainImage } from './FirstPageImage';
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
            <MainImage>
                <TriangleContainer src={Triangle} alt='' className={(scrollIndex === 2) ? "second-triangle" : ""}/>
                <SecondPageTitle>
                    {titleArr?.map((item : any, index : number) => {
                        return (
                            (item?.title === " ")
                                ? <EmptyTitle
                                    key={item?.key}
                                    className={(scrollIndex === 2) ? "second-title" : ""}
                                    style={{
                                        animationDelay: `${0.8 + index * 0.1}s`,
                                    }}/>
                                : <TitleText
                                    key={item?.key}
                                    className={(scrollIndex === 2) ? "second-title" : ""}
                                    style={{
                                        animationDelay: `${0.8 + index * 0.1}s`,
                                    }}>
                                    {item?.title}
                                </TitleText>
                        )
                    })}
                </SecondPageTitle>
                <BarContainer src={Bar} alt='' className={(scrollIndex === 2) ? "second-bar" : ""}/>
                <SecondPageContentContainer className={(scrollIndex === 2) ? "second-content" : ""}>
                    <SecondPageContent>
                        {mainPageTextChange(0)}
                        <ColorText>{mainPageTextChange(1)}</ColorText>
                        {mainPageTextChange(2)}
                        <ColorText>{mainPageTextChange(3)}</ColorText>
                    </SecondPageContent>
                    <SecondPageContent>
                        {mainPageTextChange(4)}
                        <ColorText>{mainPageTextChange(5)}</ColorText>
                    </SecondPageContent>
                </SecondPageContentContainer>
            </MainImage>
        </ImageBoxWrapper>
    )
};

const TriangleContainer = styled.img`
    width: 120px;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 35%;
    left: 0;
    opacity: 0;
`;

const SecondPageTitle = styled.div`
    position: absolute;
    top: 30%;
    left: 15%;
    display: flex;
    align-items: center;
    user-select: none;
`;

const TitleText = styled.span`
    font-family: "UniSansThin";
    font-size: 90px;
    line-height: normal;
    opacity: 0;
`;

const EmptyTitle = styled.div`
    min-width: 40px;
    opacity: 0;
`;

const SecondPageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    opacity: 0;
    position: absolute;
    bottom: 32%;
    left: 24%;
`;

const SecondPageContent = styled.div`
    font-family: "ZingRustDemo";
    font-size: 28px;
    line-height: normal;
    color: #FCFCFC;
    /* white-space: pre-line; */
    user-select: none;
    text-align: left;
    display: flex;
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
`;

export default SecondPageImage;