import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {

    const location = useLocation();
    
  return (
    <FooterContainer style={{display: `${(location.pathname === "/") ? "none" : "block"}`}}>
        Footer
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #222020;
    color: #FCFCFC;
    font-family: "Pretendard";
    z-index: 99;
    margin-top: 400px;

    @media screen and (max-width: 500px) {
        margin-bottom: 60px;
        height: 150px;
        margin-top: 100px;
    }
`;

export default Footer;