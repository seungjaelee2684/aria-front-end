import React, { useState } from 'react'
import styled from 'styled-components';
import Instagram from '../../assets/icons/insta.png';
import Twitter from '../../assets/icons/twitter.png';
import Discord from '../../assets/icons/discord.png';
import Youtube from '../../assets/icons/youtube.png';
import InstagramDefault from '../../assets/icons/instadefault.png';
import TwitterDefault from '../../assets/icons/twitterdefault.png';
import DiscordDefault from '../../assets/icons/discorddefault.png';
import YoutubeDefault from '../../assets/icons/youtubedefault.png';
import SNSModal from './SNSModal';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';

const SNSMenu = () => {

  const language = useRecoilValue(translate);
  const [sns, setSns] = useState<boolean>(false);

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
            return "Go to Twitter";
        case "japanese" :
            return "Twitterを見に行く";
        default :
            return "트위터 보러가기";
      };
    } else {
      switch (language) {
        case "english" :
            return "Go to Discord";
        case "japanese" :
            return "Discordを見に行く";
        default :
            return "디스코드 보러가기";
      };
    }; 
  };
  
  return (
    <MenuIconContainer className='MenuIconContainer'>
      {/* <InstaIcon> */}
        <MenuIcon
          // className='MenuIcon'
          title={onTitleReadyHandler(0)}
          default={InstagramDefault}
          src={Instagram}
          onClick={onClickReadyHandler}/>
      {/* </InstaIcon> */}
      {/* <TwitterIcon> */}
        <MenuIcon
          title={onTitleReadyHandler(1)}
          default={TwitterDefault}
          src={Twitter}
          onClick={() => window.open("https://twitter.com/ARIA_Academy")}/>
      {/* </TwitterIcon> */}
      {/* <DiscordIcon> */}
        <MenuIcon
          title={onTitleReadyHandler(2)}
          default={DiscordDefault}
          src={Discord}
          onClick={() => window.open("https://discord.gg/N7SEvBds4F")}/>
        {(sns) && <SNSModal sns={sns} setSns={setSns}/>}
      {/* </DiscordIcon> */}
      {/* <YoutubeIcon> */}
        <MenuIcon
          title={onTitleReadyHandler(0)}
          default={YoutubeDefault}
          src={Youtube}
          onClick={onClickReadyHandler}/>
      {/* </YoutubeIcon> */}
    </MenuIconContainer>
  )
};

const MenuIconContainer = styled.div`
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 40%;
  right: 20px;
  z-index: 89;
  gap: 12px;

  @media screen and (max-width: 1320px) {
    gap: 8px;
  }
`;

const InstaIcon = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  border: 1.5px solid #BCBCBC50;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #e54a58;
    /* .MenuIcon {
      &:hover {
        opacity: 1;
      }
    } */
  }

  @media screen and (max-width: 1320px) {
    width: 32px;
    height: 32px;
  }
`;

const TwitterIcon = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  border: 1.5px solid #BCBCBC50;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #33b2f9;
  }

  @media screen and (max-width: 1320px) {
    width: 32px;
    height: 32px;
  }
`;

const DiscordIcon = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  border: 1.5px solid #BCBCBC50;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #7489da;
  }

  @media screen and (max-width: 1320px) {
    width: 32px;
    height: 32px;
  }
`;

const YoutubeIcon = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  border: 1.5px solid #BCBCBC50;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #ff0000;
  }

  @media screen and (max-width: 1320px) {
    width: 32px;
    height: 32px;
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

export default SNSMenu;