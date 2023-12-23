import React from 'react'
import './MainImage/MainImage.css';
import '../../style/font/font.css';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MainPageNumber } from '../../store/MainPageNumber';
import { BackgroundImage, ImageBoxWrapper } from './FirstPageImage';
import SecondBG from '../../assets/images/mainpage/2.webp';
import SecondTitle from '../../assets/images/mainpage/Asset 89.webp';

interface SecondPageImageProps {
    mainPageTextChange: Function;
};

const SecondPageImage : React.FC<SecondPageImageProps> = ({ mainPageTextChange }) => {

    return (
        <ImageBoxWrapper>
            <BackgroundImage src={SecondBG} alt=''/>
            <SecondPageOutContainer>
                <SecondPageTitle src={SecondTitle} alt=''/>
                <SecondPageContentContainer>
                    <SecondPageContent>
                        {mainPageTextChange(0)}
                    </SecondPageContent>
                    <SecondPageContent>
                        {mainPageTextChange(1)}
                    </SecondPageContent>
                </SecondPageContentContainer>
            </SecondPageOutContainer>
        </ImageBoxWrapper>
    )
};

const SecondPageOutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const SecondPageTitle = styled.img`
    width: 500px;
    height: auto;
    object-fit: cover;
`;

const SecondPageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
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

export default SecondPageImage;