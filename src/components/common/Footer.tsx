import React, { useState } from 'react'
import '../../style/font/font.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import FooterLogo from '../../assets/logos/graylogo.webp';
import Instagram from '../../assets/icons/insta.png';
import Twitter from '../../assets/icons/twitter.png';
import Discord from '../../assets/icons/discord.png';
import Youtube from '../../assets/icons/youtube.png';
import InstagramDefault from '../../assets/icons/instadefault.webp';
import TwitterDefault from '../../assets/icons/twitterdefault.webp';
import DiscordDefault from '../../assets/icons/discorddefault.webp';
import YoutubeDefault from '../../assets/icons/youtubedefault.webp';
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
            <Text onClick={() => navigate("/support/policy")}>
             운영정책
            </Text>
            |
            <Text onClick={() => navigate("/support/policy")}>
             CONTACT
            </Text>
          </LeftTopLaneContainer>
        </TopLaneHeader>
        <FooterOutWrapper>
          <FirstWrapper>
            <ContentBox>
              <Content>
                주소 : 서울특별시 | 대표자 : 김민규
              </Content>
              <Content>
                이메일 : aria.academy@gmail.com
              </Content> 
              <Content>
                사업자등록번호 : 205-5421-9942
              </Content>
              <ContentUnderWrapper>
                @COPYRIGHT ARIA ACADEMY ALL RIGHTS RESERVED
              </ContentUnderWrapper>
            </ContentBox>
          </FirstWrapper>
          <LogoContainer src={FooterLogo} alt=''/>
          <MenuIconContainer>
            <IconBoxWrapper onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
              <MenuIcon
                src={DiscordDefault}
                alt=''/>
            </IconBoxWrapper>
            <IconBoxWrapper onClick={() => window.open("https://twitter.com/ARIA_Academy")}>
              <MenuIcon
                src={TwitterDefault}
                alt=''/>
            </IconBoxWrapper>
            <IconBoxWrapper onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
              <MenuIcon
                src={InstagramDefault}
                alt=''/>
            </IconBoxWrapper>
            <IconBoxWrapper onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
              <MenuIcon
                src={YoutubeDefault}
                alt=''/>
            </IconBoxWrapper>
          </MenuIconContainer>
        </FooterOutWrapper>
      </FooterOutContainer>
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
  width: 100%;
  height: 220px;
  background-color: #2a2c35;
  color: #ADADAD;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  transition: all 0.2s ease-in-out;
  position: relative;

  @media screen and (max-width: 1320px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 836px) {
    margin-top: 40px;
    height: 200px;
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
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #ADADAD;
  }

  @media screen and (max-width: 1320px) {
    font-size: 13px;
  }

  @media screen and (max-width: 836px) {
    font-size: 12px;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  height: 100%;

  @media screen and (max-width: 1320px) {
    gap: 12px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const IconBoxWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #ADADAD; */
  border-radius: 100%;
  border: 1px solid #ADADAD;
  cursor: pointer;
  
  &:hover {
    /* background-color: #e9e9e9; */
    opacity: 0.8;
  }

  @media screen and (max-width: 1320px) {
    width: 38px;
    height: 38px;
  }

  @media screen and (max-width: 836px) {
    width: 30px;
    height: 30px;
  }
`;

const MenuIcon = styled.img`
  /* width: 22px;
  height: 22px; */
  width: 90%;
  height: 90%;
  object-fit: contain;
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
  width: 180px;
  height: auto;
  object-fit: cover;

  @media screen and (max-width: 836px) {
    width: 120px;
  }

  @media screen and (max-width: 500px) {
    width: 130px;
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

const ContentUnderWrapper = styled.div`
  font-family: "UniSansThin";
  margin-top: 16px;
`;

const ContentBox = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  line-height: normal;
  gap: 8px;

  @media screen and (max-width: 836px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 11px;
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