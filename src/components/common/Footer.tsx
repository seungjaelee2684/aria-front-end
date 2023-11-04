import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import FooterLogo from '../../assets/logos/graylogo.png';
import Instagram from '../../assets/icons/insta.png';
import Twitter from '../../assets/icons/twitter.png';
import Discord from '../../assets/icons/discord.png';
import Youtube from '../../assets/icons/youtube.png';
import InstagramDefault from '../../assets/icons/instadefault.png';
import TwitterDefault from '../../assets/icons/twitterdefault.png';
import DiscordDefault from '../../assets/icons/discorddefault.png';
import YoutubeDefault from '../../assets/icons/youtubedefault.png';

const Footer = () => {

  const location = useLocation();
  const language = useRecoilValue(translate);

  const onClickReadyHandler = () => {
    switch (language) {
      case "english" :
          return alert("Coming soon");
      case "japanese" :
          return alert("準備中です。");
      default :
          return alert("준비중입니다.");
    };
  };

  const onTitleReadyHandler = ( Num : number ) => {
    if (Num === 0) {
      switch (language) {
        case "english" :
            return "Coming soon";
        case "japanese" :
            return "準備中です。";
        default :
            return "준비중입니다.";
      };
    } else if (Num === 1) {
      switch (language) {
        case "english" :
            return "Visit Twitter account.";
        case "japanese" :
            return "Twitterを見に行く";
        default :
            return "트위터 보러가기";
      };
    } else {
      switch (language) {
        case "english" :
            return "Visit Discord account.";
        case "japanese" :
            return "Discordを見に行く";
        default :
            return "디스코드 보러가기";
      };
    }; 
  };

  type ArrType = {
    englishcontent: string,
    japanesecontent: string,
    content: string
  }

  const textArr : ArrType[] = [
    {englishcontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", japanesecontent: "", content: ""},
    {englishcontent: "", japanesecontent: "", content: ""},
  ];

  const translateText = (Num : number) => {
    switch (language) {
      case "english" :
        return textArr[Num]?.englishcontent;
      case "japanese" :
        return textArr[Num]?.japanesecontent;
      default :
        return textArr[Num]?.content;
    }
  };
    
  return (
    <FooterContainer style={{display: `${(location.pathname === "/") ? "none" : "block"}`}}>
      <FooterOutContainer>
        <TopLaneHeader>
          <LeftTopLaneContainer>
            <Text>
              내용내용
            </Text>
            <Text>
              내용내용
            </Text>
            <Text>
              내용내용
            </Text>
          </LeftTopLaneContainer>
          <MenuIconContainer className='MenuIconContainer'>
            <MenuIcon
              title={onTitleReadyHandler(0)}
              default={InstagramDefault}
              src={Instagram}
              onClick={onClickReadyHandler}/>
            <MenuIcon
              title={onTitleReadyHandler(1)}
              default={TwitterDefault}
              src={Twitter}
              onClick={() => window.open("https://twitter.com/ARIA_Academy")}/>
            <MenuIcon
              title={onTitleReadyHandler(2)}
              default={DiscordDefault}
              src={Discord}
              onClick={() => window.open("https://discord.gg/N7SEvBds4F")}/>
            <MenuIcon
              title={onTitleReadyHandler(0)}
              default={YoutubeDefault}
              src={Youtube}
              onClick={onClickReadyHandler}/>
          </MenuIconContainer>
        </TopLaneHeader>
        <FooterOutWrapper>
          <LogoContainer src={FooterLogo}/>
          <FirstWrapper>
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
          </FirstWrapper>
          <FirstWrapper>
            개인정보 처리방침
          </FirstWrapper>
        </FooterOutWrapper>
      </FooterOutContainer>
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #222020;
  color: #ADADAD;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  z-index: 99;
  margin-top: 300px;

  @media screen and (max-width: 500px) {
    margin-bottom: 60px;
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
  height: 150px;
  border-bottom: 1px solid #ADADAD;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftTopLaneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #e9e9e9;
`;

const Text = styled.div`
  font-size: 16px;
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 1320px) {
    gap: 8px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MenuIcon = styled.div<{ default : string, src : string }>`
  width: 36px;
  height: 36px;
  background-image: url(${(props) => props.default});
  background-size: 100% 100%;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-image: url(${(props) => props.src});
  }

  @media screen and (max-width: 1320px) {
    width: 32px;
    height: 32px;
  }
`;

const FooterOutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 40px;
  margin: 40px 0px;
`;

const LogoContainer = styled.img`
  width: 150px;
  height: 80px;
  object-fit: cover;
`;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 30px;
`;

const Title = styled.div`

`;

const ContentBox = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Content = styled.div`

`;

export default Footer;