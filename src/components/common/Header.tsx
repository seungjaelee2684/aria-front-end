import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png'

const Header = () => {
  return (
    <HeaderLayoutContainer>
        <HeaderLogo src={logo} alt="" />
        <TapOutContainer>
            <TapContainer>
                Header
            </TapContainer>
            <TapContainer>
                Header
            </TapContainer>
            <TapContainer>
                Header
            </TapContainer>
            <TapContainer>
                Header
            </TapContainer>
            <TapContainer>
                Header
            </TapContainer>
        </TapOutContainer>
    </HeaderLayoutContainer>
  )
};

const HeaderLayoutContainer = styled.div`
    width: 100%;
    height: 60px;
    /* border-bottom: 1px solid gray; */
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    gap: 50%;
    align-items: center;
    background-color: #fcfcfc;
    padding: 0px 280px;
`;

const HeaderLogo = styled.img`
    width: 55px;
    height: 55px;
    object-fit: contain;
    cursor: pointer;

    &:hover {
        width: 58px;
        height: 58px;
        transition: all 0.2s ease-in-out;
    }
`;

const TapOutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
`;

const TapContainer = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    color: #222020;
    font-weight: 700;
`;

export default Header;