import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import FooterLogo from '../../assets/logos/graylogo.png';
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

const Footer = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const language = useRecoilValue(translate);
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

  type ArrType = {
    englishcontent: string,
    chinesecontent: string,
    japanesecontent: string,
    content: string
  }

  const textArr : ArrType[] = [
    {englishcontent: "", chinesecontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", chinesecontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", chinesecontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", chinesecontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", chinesecontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", chinesecontent: "", japanesecontent: "", content: ""},
  ];

  const translateText = (Num : number) => {
    switch (language) {
      case "english" :
        return textArr[Num]?.englishcontent;
      case "chinese" :
        return textArr[Num]?.chinesecontent;
      case "japanese" :
        return textArr[Num]?.japanesecontent;
      case "korean" :
        return textArr[Num]?.content;
      default :
        return textArr[Num]?.englishcontent;
    }
  };
    
  return (
    <FooterContainer
      style={{
        display: `${((location.pathname === "/")
          || (location.pathname === "/check"))
            ? "none"
            : "block"}`
      }}>
      <FooterOutContainer>
        <TopLaneHeader>
          <LeftTopLaneContainer>
            <HomeButton onClick={() => navigate("/")}>
              <AiFillHome />
            </HomeButton>
            <Text>
              개인정보 처리방침
            </Text>
            <Text>
              내용내용
            </Text>
            <Text>
              내용내용
            </Text>
          </LeftTopLaneContainer>
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
        </TopLaneHeader>
        <FooterOutWrapper>
          <LogoContainer src={FooterLogo} alt=''/>
          <FirstWrapper>
            <Title>
              개인정보 처리방침
            </Title>
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
          {/* <FirstWrapper>
            <Title>
              개인정보 처리방침
            </Title>
            <ContentBox>
              <Content>
                주소: 서울특별시 블라블라 블라블라
              </Content>
              <Content>
                개인정보 처리방침
              </Content> 
              <Content>
                개인정보 처리방침
              </Content> 
            </ContentBox>
          </FirstWrapper> */}
        </FooterOutWrapper>
      </FooterOutContainer>
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #333030;
  color: #ADADAD;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  z-index: 99;
  margin-top: 300px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1320px) {
    margin-top: 200px;
  }

  @media screen and (max-width: 836px) {
    margin-top: 180px;
    height: 240px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
    height: 150px;
    margin-top: 100px;
  }
`;

const FooterOutContainer = styled.div`
  width: 1320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px auto;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const TopLaneHeader = styled.div`
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #ADADAD;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 836px) {
    min-height: 40px;
  }

  @media screen and (max-width: 500px) {
    min-height: 30px;
  }
`;

const LeftTopLaneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  color: #e9e9e9;

  @media screen and (max-width: 836px) {
    gap: 30px;
  }

  @media screen and (max-width: 500px) {
    gap: 20px;
  }
`;

const HomeButton = styled.div`
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ADADAD;
  }

  @media screen and (max-width: 836px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const Text = styled.div`
  font-size: 16px;

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 836px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const IconBoxWrapper = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252424;
  cursor: pointer;
  
  &:hover {
    background-color: #525050;
  }

  @media screen and (max-width: 836px) {
    width: 28px;
    height: 28px;
  }
`;

const MenuIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;

  @media screen and (max-width: 836px) {
    width: 24px;
    height: 24px;
  }
`;

const FooterOutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 100px;
  margin: 40px 0px;

  @media screen and (max-width: 836px) {
    gap: 50px;
    margin: 30px 0px;
  }

  @media screen and (max-width: 500px) {
    gap: 40px;
    margin: 16px 0px;
  }
`;

const LogoContainer = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;

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
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 836px) {
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 8px;
    gap: 5px;
  }
`;

const Content = styled.div`
  line-height: normal;
`;

export default Footer;