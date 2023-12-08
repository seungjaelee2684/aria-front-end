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
import YoutubeDefault from '../../../assets/icons/youtubedefault.png';
import SNSModal from '../SNSModal';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import { AlertModalOpen } from '../../../store/AlertModalOpen';

const SNSMenu = () => {

  const language = useRecoilValue(translate);
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);
  const [sns, setSns] = useState<boolean>(false);

  const onClickReadyHandler = () => {
    switch (language) {
      case "english" :
        return alert("Coming soon");
      case "chinese" :
        return alert("正在准备。");
      case "japanese" :
        return alert("準備中です。");
      case "korean" :
        return alert("준비중입니다.");
      default :
        return alert("Coming soon");
    };
  };

  const onTitleReadyHandler = ( Num : number ) => {
    if (Num === 0) {
      switch (language) {
        case "english" :
          return "Coming soon";
        case "chinese" :
          return "正在准备。";
        case "japanese" :
          return "準備中です。";
        case "korean" :
          return "준비중입니다.";
        default :
          return "Coming soon";
      };
    } else if (Num === 1) {
      switch (language) {
        case "english" :
          return "Visit Twitter account.";
        case "chinese" :
          return "查看推特";
        case "korean" :
          return "트위터 보러가기";
        default :
          return "Visit Twitter account.";
      };
    } else {
      switch (language) {
        case "english" :
          return "Visit Discord account.";
        case "chinese" :
          return "查看 Discord";
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
      {/* <DiscordIcon> */}
      <MenuIcon
          title={onTitleReadyHandler(2)}
          src={Discord}
          alt=''
          onClick={() => window.open("https://discord.gg/N7SEvBds4F")}/>
      {/* </DiscordIcon> */}
      {/* <TwitterIcon> */}
      <MenuIcon
          title={onTitleReadyHandler(1)}
          src={Twitter}
          alt=''
          onClick={() => window.open("https://twitter.com/ARIA_Academy")}/>
      {/* </TwitterIcon> */}
      {/* <InstaIcon> */}
        <MenuIcon
          // className='MenuIcon'
          title={onTitleReadyHandler(0)}
          src={Instagram}
          alt=''
          onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}/>
      {/* </InstaIcon> */}
      {/* <YoutubeIcon> */}
        <MenuIcon
          title={onTitleReadyHandler(0)}
          src={Youtube}
          alt=''
          onClick={() => setAlertModal({...alertModal, isOpen: true, whatAlert: 0})}/>
      {/* </YoutubeIcon> */}
    </MenuIconContainer>
  )
};

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  height: 100%;

  @media screen and (max-width: 1320px) {
    gap: 14px;
  }

  @media screen and (max-width: 836px) {
    gap: 12px;
  }

  @media screen and (max-width: 500px) {
    display: none;
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

const MenuIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 836px) {
    width: 18px;
    height: 18px;
  }
`;

export default SNSMenu;