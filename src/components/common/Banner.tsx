import React from 'react'
import styled from 'styled-components';
import '../../style/Banner.css';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import BannerBackground from '../../assets/images/rapla2.png';
import Banner1 from '../../assets/images/mainimage2.jpg';
import Banner2 from '../../assets/images/rapla2.png';

interface BannerProps {
    page: number;
}

const Banner : React.FC<BannerProps> = ({ page }) => {

    const language = useRecoilValue(translate);

    type InfoType = {
        image: string,
        englishtitle: string,
        japanesetitle: string,
        title: string
    };

    const textInformation : InfoType[] = [
        {image: Banner1, englishtitle: "EVENT", japanesetitle: "イベント", title: "이벤트"},
        {image: Banner2, englishtitle: "ANNOUNCEMENTS", japanesetitle: "お知らせ", title: "공지 사항"},
        {image: Banner1, englishtitle: "SHOWCASE", japanesetitle: "名誉の殿堂", title: "명예의 전당"},
        {image: Banner2, englishtitle: "", japanesetitle: "", title: ""}
    ];

    const textChange = () => {
        switch (language) {
            case "english" :
                return textInformation[page]?.englishtitle;
            case "japanese" :
                return textInformation[page]?.japanesetitle;
            default :
                return textInformation[page]?.title;
        };
    };

  return (
    <TitleContainer>
      <BannerBackgroundImg src={textInformation[page]?.image}>
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
  height: 300px;
  margin: 80px 0px 0px 0px;
  background-color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  @media screen and (max-width: 836px) {
    height: 200px;
  }

  @media screen and (max-width: 500px) {
    height: 150px;
    margin: 40px 0px 0px 0px;
  }
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

export default Banner;