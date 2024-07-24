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
        href="https://discord.gg/N7SEvBds4F"
        target='_blank'
        rel="noopener noreferrer">
        <BsDiscord />
      </MenuIcon>
      <MenuIcon
        title={onTitleReadyHandler(1)}
        href="https://twitter.com/ARIA_Academy"
        target='_blank'
        rel="noopener noreferrer">
        <BsTwitterX />
      </MenuIcon>
      <MenuIcon
        title={onTitleReadyHandler(2)}
        href="https://www.instagram.com/aria.artacademy/"
        target='_blank'
        rel="noopener noreferrer">
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

const MenuIconContainer = styled.nav`
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

const MenuIcon = styled.a`
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