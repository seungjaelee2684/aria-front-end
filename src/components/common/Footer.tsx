import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import FooterLogo from '../../assets/logos/graylogo.webp';
import Instagram from '../../assets/icons/insta.png';
import Twitter from '../../assets/icons/twitter.png';
import Discord from '../../assets/icons/discord.png';
import Youtube from '../../assets/icons/youtube.png';
import InstagramDefault from '../../assets/icons/instablack.webp';
import TwitterDefault from '../../assets/icons/twitterblack.webp';
import DiscordDefault from '../../assets/icons/discordblack.webp';
import YoutubeDefault from '../../assets/icons/youtubeblack.webp';
import { AiFillHome } from 'react-icons/ai';
import { AlertModalOpen } from '../../store/AlertModalOpen';
import { footerContent } from '../../languages/FooterTrans';

const Footer = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const language = localStorage.getItem("language");
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

  

  const translateText = (Num : number) => {
    switch (language) {
      case "chinese" :
        return footerContent[Num]?.chinesecontent;
      case "japanese" :
        return footerContent[Num]?.japanesecontent;
      case "korean" :
        return footerContent[Num]?.content;
      default :
        return footerContent[Num]?.englishcontent;
    }
  };
    
  return (
    <FooterContainer
      style={{
        display: `${((location.pathname === "/")
          || (location.pathname === "/check"))
            ? "none"
            : "flex"}`
      }}>
      <FooterOutContainer>
        <TopLaneHeader>
          <LeftTopLaneContainer>
            <HomeButton onClick={() => navigate("/")}>
              <AiFillHome />
            </HomeButton>
            |
            <Text>
              개인정보 처리방침
            </Text>
            |
            <Text>
              내용내용
            </Text>
            |
            <Text>
              내용내용
            </Text>
          </LeftTopLaneContainer>
        </TopLaneHeader>
        <FooterOutWrapper>
          <FirstWrapper>
            <ContentBox>
              <Content>
                주소: 서울특별시
              </Content>
              <Content>
                개인정보 처리방침
              </Content> 
              <Content>
                개인정보 처리방침
              </Content> 
            </ContentBox>
          </FirstWrapper>
          <LogoContainer src={FooterLogo} alt=''/>
          <MenuIconContainer>
            <IconBoxWrapper>
              <MenuIcon
                src={DiscordDefault}
                alt=''
                onClick={() => window.open("https://discord.gg/N7SEvBds4F")}/>
            </IconBoxWrapper>
            <IconBoxWrapper>
              <MenuIcon
                src={TwitterDefault}
                alt=''
                onClick={() => window.open("https://twitter.com/ARIA_Academy")}/>
            </IconBoxWrapper>
            <IconBoxWrapper>
              <MenuIcon
                src={InstagramDefault}
                alt=''
                onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}/>
            </IconBoxWrapper>
            <IconBoxWrapper>
              <MenuIcon
                src={YoutubeDefault}
                alt=''
                onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}/>
            </IconBoxWrapper>
          </MenuIconContainer>
        </FooterOutWrapper>
      </FooterOutContainer>
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #2a2c35;
  color: #ADADAD;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  justify-content: center;
  align-items: center;
  z-index: 99;
  margin-top: 80px;
  transition: all 0.2s ease-in-out;
  position: relative;

  @media screen and (max-width: 1320px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 836px) {
    margin-top: 40px;
    height: 180px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
    height: 150px;
    margin-top: 30px;
  }
`;

const FooterOutContainer = styled.div`
  width: 1320px;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const TopLaneHeader = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 836px) {
    min-height: 30px;
  }

  @media screen and (max-width: 500px) {
    min-height: 20px;
  }
`;

const LeftTopLaneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #e9e9e9;

  @media screen and (max-width: 836px) {
    gap: 3px;
  }

  @media screen and (max-width: 500px) {
    gap: 2px;
  }
`;

const HomeButton = styled.div`
  font-size: 10px;
  cursor: pointer;

  &:hover {
    color: #ADADAD;
  }

  @media screen and (max-width: 836px) {
    font-size: 8px;
  }
`;

const Text = styled.div`
  font-size: 13px;

  @media screen and (max-width: 1320px) {
    font-size: 12px;
  }

  @media screen and (max-width: 836px) {
    font-size: 11px;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
  height: 100%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const IconBoxWrapper = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ADADAD;
  border-radius: 100%;
  cursor: pointer;
  
  &:hover {
    background-color: #e9e9e9;
  }

  @media screen and (max-width: 836px) {
    width: 30px;
    height: 30px;
  }
`;

const MenuIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;

  @media screen and (max-width: 836px) {
    width: 12px;
    height: 12px;
  }
`;

const FooterOutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  /* @media screen and (max-width: 836px) {
    margin: 30px 0px;
  }

  @media screen and (max-width: 500px) {
    margin: 16px 0px;
  } */
`;

const LogoContainer = styled.img`
  width: 130px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 20px;
  right: 2%;

  @media screen and (max-width: 836px) {
    width: 120px;
  }

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 30px;

  @media screen and (max-width: 836px) {
    gap: 24px;
  }

  @media screen and (max-width: 500px) {
    gap: 16px;
  }
`;

const Title = styled.div`
  font-size: 14px;

  @media screen and (max-width: 836px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const ContentBox = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
  line-height: normal;
  gap: 8px;

  @media screen and (max-width: 836px) {
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 9px;
    gap: 5px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.div`
  
`;

export default Footer;