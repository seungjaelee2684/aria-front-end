import React, { useState } from 'react'
import styled from 'styled-components';
import Instagram from '../../assets/icons/insta.png';
import Twitter from '../../assets/icons/twitter.png';
import Discord from '../../assets/icons/discord.png';
import SNSModal from './SNSModal';

const SNSMenu = () => {

  const [sns, setSns] = useState<string>("");

  const onClickModalHandler = ( text : string ) => {
    if (sns === text) {
      setSns("");
    } else {
      setSns(text);
    };
  };
  
  return (
    <MenuIconContainer>
      <InstaIcon>
        <MenuIcon
          src={Instagram}
          onClick={() => {onClickModalHandler("instagram")}}/>
        {(sns === "instagram") && <SNSModal sns={sns}/>}
      </InstaIcon>
      <TwitterIcon>
        <MenuIcon
          src={Twitter}
          onClick={() => {onClickModalHandler("twitter")}}/>
        {(sns === "twitter") && <SNSModal sns={sns}/>}
      </TwitterIcon>
      <DiscordIcon>
        <MenuIcon
          src={Discord}
          onClick={() => {onClickModalHandler("discord")}}/>
        {(sns === "discord") && <SNSModal sns={sns}/>}
      </DiscordIcon>
    </MenuIconContainer>
  )
};

const MenuIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
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

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
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