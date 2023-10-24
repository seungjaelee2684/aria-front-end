import React from 'react'
import styled from 'styled-components';
import BannerBackground from '../assets/images/rapla2.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import NotificationList from '../components/NotificationPage/NotificationList';

const Notification = () => {

  const language = useRecoilValue(translate);

  const textChange = () => {
    switch (language) {
      case "english" :
        return "NOTICE";
      case "japanese" :
        return "お知らせ";
      default :
        return "공지 사항";
    };
  };

  return (
    <LayoutContainer>
      <TitleContainer>
        <BannerBackgroundImg src={BannerBackground}>
          {textChange()}
        </BannerBackgroundImg>
      </TitleContainer>
      <NotificationList />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 80px 0px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 230px;
  background-color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 40px;
  font-weight: 700;
  line-height: 150%;
  color: #FCFCFC;
`;

export default Notification;