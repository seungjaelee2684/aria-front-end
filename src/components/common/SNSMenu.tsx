import React from 'react'
import styled from 'styled-components';
import Menu from '../../assets/icons/downArrow.png';

const SNSMenu = () => {
  return (
    <MenuIconContainer>
      <MenuIcon src={Menu}/>
    </MenuIconContainer>
  )
};

const MenuIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default SNSMenu;