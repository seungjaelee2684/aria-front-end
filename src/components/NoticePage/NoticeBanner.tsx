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
    height: 230px;
    background-color: #e9e9e9;
    margin: 80px 0px 0px 0px;
    user-select: none;
`;
const BannerImageContainer = styled.div<{ src : string }>`
    width: 100%;
    height: 230px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    /* background-position: center center; */
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 36px;
    font-weight: 700;
    line-height: 150%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const AnimationBar = styled.div`
    width: 80px;
    height: 3px;
    background-color: #FCFCFC;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 0;
`;

export default NoticeBanner;