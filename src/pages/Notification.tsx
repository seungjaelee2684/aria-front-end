import React from 'react'
import styled from 'styled-components';
import BannerBackground from '../assets/images/bannerbg.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import NotificationList from '../components/NotificationPage/NotificationList';

const Notification = () => {

  const japanese = useRecoilValue(translate);

  return (
    <LayoutContainer>
      <TitleContainer>
        <BannerBackgroundImg src={BannerBackground}>
          {japanese
            ? "お知らせ"
            : "공지 사항"}
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
  height: 200px;
  background-color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerBackgroundImg = styled.div<{ src : string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 40px;
  font-weight: 700;
  line-height: 150%;
  color: #2b0404;
`;

export default Notification;