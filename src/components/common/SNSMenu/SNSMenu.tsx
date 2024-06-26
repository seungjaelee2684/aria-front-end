import React, { useState } from 'react'
import styled from 'styled-components';
import './SNSMenu.css';
import Instagram from '../../../assets/icons/instablack.webp';
import Twitter from '../../../assets/icons/twitterblack.webp';
import Discord from '../../../assets/icons/discordblack.webp';
import Youtube from '../../../assets/icons/youtubeblack.webp';
import InstagramDefault from '../../../assets/icons/instadefault.png';
import TwitterDefault from '../../../assets/icons/twitterdefault.png';
import DiscordDefault from '../../../assets/icons/discorddefault.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import { AlertModalOpen } from '../../../store/AlertModalOpen';
import { IoShareSocial } from "react-icons/io5";
import { BsInstagram, BsDiscord, BsYoutube, BsTwitterX } from "react-icons/bs";

const SNSMenu = () => {

  const language = localStorage.getItem("language");
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);
  const [sns, setSns] = useState<boolean>(false);

  const onTitleReadyHandler = ( Num : number ) => {
    if (Num === 0) {
      switch (language) {
        case "japanese" :
          return "準備中です。";
        case "korean" :
          return "준비중입니다.";
        default :
          return "Coming soon";
      };
    } else if (Num === 1) {
      switch (language) {
        case "japanese" :
          return "Twitterを見に行く";
        case "korean" :
          return "트위터 보러가기";
        default :
          return "Visit Twitter account.";
      };
    } else if (Num === 2) {
      switch (language) {
        case "japanese" :
          return "Instagramを見に行く";
        case "korean" :
          return "인스타그램 보러가기";
        default :
          return "Visit Instagram account.";
      };
    } else {
      switch (language) {
        case "japanese" :
          return "Discordを見に行く";
        case "korean" :
          return "디스코드 보러가기";
        default :
          return "Visit Discord account.";
      };
    }; 
  };
  
  return (
    <MenuIconContainer>
      <MenuIcon
        title={onTitleReadyHandler(3)}
        onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
        <BsDiscord />
      </MenuIcon>
      <MenuIcon
        title={onTitleReadyHandler(1)}
        onClick={() => window.open("https://twitter.com/ARIA_Academy")}>
        <BsTwitterX />
      </MenuIcon>
      <MenuIcon
        title={onTitleReadyHandler(2)}
        onClick={() => window.open("https://www.instagram.com/aria.artacademy/")}>
        <BsInstagram />
      </MenuIcon>
      <MenuIcon
        title={onTitleReadyHandler(0)}
        onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}>
        <BsYoutube />
      </MenuIcon>
    </MenuIconContainer>
  )
};

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;

  @media screen and (max-width: 1320px) {
    gap: 14px;
  }

  @media screen and (max-width: 836px) {
    gap: 10px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const SocialIcon = styled.div`
  width: 34px;
  height: 34px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #56a0e0;
  color: #FCFCFC;
  border-radius: 100%;

  @media screen and (max-width: 1320px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }

  @media screen and (max-width: 836px) {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }
`;

const InstaIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #e54a5890;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    
    background-color: #FFFFFF;
    /* .MenuIcon {
      &:hover {
        opacity: 1;
      }
    } */
  }
`;

const TwitterIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #33b2f990;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    
    background-color: #FFFFFF;
  }
`;

const DiscordIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #7489da90;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover { 
    background-color: #FFFFFF;
  }
`;

const YoutubeIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ff000090;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1px solid #ff0000;
    background-color: #FFFFFF;
  }
`;

const MenuIcon = styled.div`
  font-size: 22px;
  color: #000000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 836px) {
    font-size: 18px;
  }
`;

export default SNSMenu;