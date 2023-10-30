import React from 'react'
import '../../style/Banner.css';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import Banner from '../../assets/images/mainimage2.jpg';

const NoticeBanner = () => {

    const language = useRecoilValue(translate);

    const bannerText = () => {
        switch (language) {
            case "english" :
                return "EVENT";
            case "japanese" :
                return "イベント";
            default :
                return "이벤트";
        };
    };

  return (
    <TitleContainer>
        <BannerImageContainer src={Banner}>
            <TextWrapper>
                <TextBox className='TextBox'>
                    {bannerText()}
                </TextBox>
                <AnimationBar className='AnimationBar'/>
            </TextWrapper>
        </BannerImageContainer>
    </TitleContainer>
  )
};

const TitleContainer = styled.div`
    width: 100%;
    height: 350px;
    background-color: #e9e9e9;
    margin: 80px 0px 0px 0px;
    user-select: none;

    @media screen and (max-width: 836px) {
        height: 200px;
    }

    @media screen and (max-width: 500px) {
        height: 150px;
        margin: 40px 0px 0px 0px;
    }
`;
const BannerImageContainer = styled.div<{ src : string }>`
    width: 100%;
    height: 350px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    /* background-position: center center; */
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 836px) {
        height: 200px;
    }

    @media screen and (max-width: 500px) {
        height: 150px;
    }
`;

const TextWrapper = styled.div`
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const TextBox = styled.div`
    color: #FCFCFC;
    font-family: "Pretendard";
    font-size: 46px;
    font-weight: 700;
    line-height: 150%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 500px) {
        font-size: 32px;
    }
`;

const AnimationBar = styled.div`
    width: 80px;
    height: 3px;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 0;

    @media screen and (max-width: 500px) {
        width: 60px;
    }
`;

export default NoticeBanner;