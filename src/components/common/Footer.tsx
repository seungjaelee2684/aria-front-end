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
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsInstagram, BsDiscord, BsYoutube, BsTwitterX } from "react-icons/bs";

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
             {translateText(0)}
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
                {translateText(1)} : 
                <ColorContent>
                  {translateText(2)}
                </ColorContent>
                | {translateText(3)} :
                 <ColorContent>
                  {translateText(4)}
                 </ColorContent>
              </Content>
              <Content>
                {translateText(5)} :
                <ColorContent>
                  aria.academy@gmail.com
                </ColorContent>
              </Content> 
              <Content>
                {translateText(6)} :
                <ColorContent>
                  205-5421-9942
                </ColorContent>
              </Content>
              <ContentUnderWrapper>
                @COPYRIGHT ARIA ACADEMY ALL RIGHTS RESERVED
              </ContentUnderWrapper>
            </ContentBox>
          </FirstWrapper>
          <LogoContainer src={FooterLogo} alt=''/>
          <IconOutContainer>
            <IconTitleWrapper>
              <MdOutlineSupervisorAccount />
              <IconTitle>
                SNS
              </IconTitle>
            </IconTitleWrapper>
            <MenuIconContainer>
              <IconBoxWrapper onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
                <MenuIcon>
                  <BsDiscord />
                </MenuIcon>
              </IconBoxWrapper>
              <IconBoxWrapper onClick={() => window.open("https://twitter.com/ARIA_Academy")}>
                <MenuIcon>
                  <BsTwitterX />
                </MenuIcon>
              </IconBoxWrapper>
              <IconBoxWrapper onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
                <MenuIcon>
                  <BsInstagram />
                </MenuIcon>
              </IconBoxWrapper>
              <IconBoxWrapper onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
                <MenuIcon>
                  <BsYoutube />
                </MenuIcon>
              </IconBoxWrapper>
            </MenuIconContainer>
          </IconOutContainer>
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
  transition: all 0.2s ease-in-out;
  position: relative;

  @media screen and (max-width: 836px) {
    height: 200px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 46px;
    height: 150px;
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
    font-size: 7px;
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
    font-size: 10px;
  }
`;

const IconOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const IconTitleWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  font-size: 24px;
  color: #e9e9e9;
  user-select: none;

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 836px) {
    font-size: 16px;
    gap: 3px;
  }
`;

const IconTitle = styled.div`
  font-family: "UniSansThin";
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  color: #e9e9e9;

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 836px) {
    font-size: 16px;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  height: 100%;
  user-select: none;

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

const MenuIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ADADAD;

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 836px) {
    font-size: 14px;
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
  width: 180px;
  height: auto;
  object-fit: cover;
  user-select: none;

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
    font-size: 9px;
    gap: 5px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: "CinzelRegular";
`;

const ColorContent = styled.div`
  color: #e9e9e9;
  font-weight: 400;
  font-family: "Pretendard";
`;

export default Footer;