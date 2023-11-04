import React from 'react'
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import FooterLogo from '../../assets/logos/graylogo.png';

const Footer = () => {

    const location = useLocation();
    const language = useRecoilValue(translate);
    
  return (
    <FooterContainer style={{display: `${(location.pathname === "/") ? "none" : "block"}`}}>
      <FooterOutContainer>
        <TopLaneHeader>

        </TopLaneHeader>
        <FooterOutWrapper>
          <LogoContainer src={FooterLogo}/>
          <FirstWrapper>
            개인정보 처리방침
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopLaneHeader = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ADADAD;
  padding: 0px 40px;
`;

const FooterOutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 40px;
  gap: 40px;
`;

const LogoContainer = styled.img`
  width: 150px;
  height: 80px;
  object-fit: cover;
`;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Footer;