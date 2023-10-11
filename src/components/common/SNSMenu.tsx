import React, { useState } from 'react'
import styled from 'styled-components';
import Instagram from '../../assets/icons/insta.png';
import Twitter from '../../assets/icons/twitter.png';
import Discord from '../../assets/icons/discord.png';
import Youtube from '../../assets/icons/youtube.png';
import SNSModal from './SNSModal';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';

const SNSMenu = () => {

  const japanese = useRecoilValue(translate);
  const [sns, setSns] = useState<boolean>(false);

  const onClickReadyHandler = () => {
    if (japanese) {
      alert("準備中です。");
    } else {
      alert("준비중입니다.");
    };
  };
  
  return (
    <MenuIconContainer className='MenuIconContainer'>
      <InstaIcon>
        <MenuIcon
          // className='MenuIcon'
          src={Instagram}
          onClick={onClickReadyHandler}/>
      </InstaIcon>
      <TwitterIcon>
        <MenuIcon
          src={Twitter}
          onClick={() => window.open("https://twitter.com/ARIA_Academy")}/>
      </TwitterIcon>
      <DiscordIcon>
        <MenuIcon
          src={Discord}
          onClick={() => setSns(!sns)}/>
        {(sns) && <SNSModal sns={sns}/>}
      </DiscordIcon>
      <YoutubeIcon>
        <MenuIcon
          src={Youtube}
          onClick={onClickReadyHandler}/>
      </YoutubeIcon>
    </MenuIconContainer>
  )
};

const MenuIconContainer = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InstaIcon = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  justify-content: center;
  place-items: inherit;
  border: 1.5px solid #e54a5830;
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

  @media screen and (max-width: 1140px) {
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
  border: 1.5px solid #33b2f930;
  border-radius: 100%;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #33b2f9;
  }

  @media screen and (max-width: 1140px) {
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
  border: 1.5px solid #7489da30;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #7489da;
  }

  @media screen and (max-width: 1140px) {
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
  border: 1.5px solid #ff000030;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #ff0000;
  }

  @media screen and (max-width: 1140px) {
    width: 32px;
    height: 32px;
  }
`;

const MenuIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.3;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1140px) {
    width: 22px;
    height: 22px;
  }
`;

export default SNSMenu;