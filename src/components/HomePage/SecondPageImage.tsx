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

interface SecondPageImageProps {
    mainPageTextChange: Function;
};

const SecondPageImage : React.FC<SecondPageImageProps> = ({ mainPageTextChange }) => {

    const scrollIndex = useRecoilValue(MainPageNumber);

    return (
        <ImageBoxWrapper>
            <BackgroundImage src={SecondBG} alt=''/>
            <MainImage>
                <TriangleContainer src={Triangle} alt='' className={(scrollIndex === 2) ? "second-triangle" : ""}/>
                <SecondPageTitle
                    src={SecondTitle}
                    alt=''
                    className={(scrollIndex === 2) ? "second-title" : ""}/>
                <BarContainer className={(scrollIndex === 2) ? "second-bar" : ""}/>
                <SecondPageContentContainer className={(scrollIndex === 2) ? "second-content" : ""}>
                    <SecondPageContent>
                        {mainPageTextChange(0)}
                    </SecondPageContent>
                    <SecondPageContent>
                        {mainPageTextChange(1)}
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

const SecondPageTitle = styled.img`
    width: 500px;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 28%;
    left: 15%;
    opacity: 0;
`;

const SecondPageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    opacity: 0;
    position: absolute;
    bottom: 29%;
    left: 24%;
`;

const SecondPageContent = styled.div`
    font-family: "ZingRustDemo";
    font-size: 28px;
    line-height: normal;
    color: #FCFCFC;
    white-space: pre-line;
    user-select: none;
    text-align: left;
`;

const BarContainer = styled.div`
    width: 4px;
    height: 52%;
    background-color: #ff3f5f;
    position: absolute;
    bottom: 0;
    left: 22%;
    opacity: 0;
`;

export default SecondPageImage;