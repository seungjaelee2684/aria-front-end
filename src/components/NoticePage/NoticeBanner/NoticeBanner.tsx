import React from 'react'
import './NoticeBanner.css';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import Banner from '../../../assets/images/mainimage2.jpg';

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
          {bannerText()}
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
  color: #FCFCFC;
  font-family: "Pretendard";
  font-size: 36px;
  font-weight: 700;
  line-height: 150%;
`;

export default NoticeBanner;