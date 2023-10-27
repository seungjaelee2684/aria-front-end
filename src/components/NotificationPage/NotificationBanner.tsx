import React from 'react'
import styled from 'styled-components';
import '../../style/Banner.css';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import BannerBackground from '../../assets/images/rapla2.png';

const NotificationBanner = () => {

    const language = useRecoilValue(translate);

    const textChange = () => {
        switch (language) {
            case "english" :
                return "NOTIFICATION";
            case "japanese" :
                return "お知らせ";
            default :
                return "공지 사항";
        };
    };

  return (
    <TitleContainer>
      <BannerBackgroundImg src={BannerBackground}>
        <TextWrapper>
          <TextBox className='TextBox'>
            {textChange()}
          </TextBox>
          <AnimationBar className='AnimationBar'/>
        </TextWrapper>
      </BannerBackgroundImg>
    </TitleContainer>
  )
};

const TitleContainer = styled.div`
  width: 100%;
  height: 230px;
  background-color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const BannerBackgroundImg = styled.div<{ src : string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center 10%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 36px;
  font-weight: 700;
  line-height: 150%;
  color: #FCFCFC;
`;

const TextWrapper = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
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
`;

const AnimationBar = styled.div`
  width: 270px;
  height: 3px;
  background-color: #FCFCFC;
  position: absolute;
  bottom: 0;
  left: -10px;
  opacity: 0;
`;

export default NotificationBanner;