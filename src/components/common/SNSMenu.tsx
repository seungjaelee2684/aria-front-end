import React from 'react'
import styled from 'styled-components';
import Instagram from '../../assets/icons/insta.png';
import Twitter from '../../assets/icons/twitter.png';
import Discord from '../../assets/icons/discord.png';

const SNSMenu = () => {
  
  return (
    <MenuIconContainer>
      <InstaIcon>
        <MenuIcon src={Instagram}/>
      </InstaIcon>
      <TwitterIcon>
        <MenuIcon src={Twitter}/>
      </TwitterIcon>
      <DiscordIcon>
        <MenuIcon src={Discord}/>
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
  cursor: pointer;

  &:hover {
    border: 1.5px solid #e54a58;
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
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #33b2f9;
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
  cursor: pointer;

  &:hover {
    border: 1.5px solid #7489da;
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
`;

export default SNSMenu;