import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
        Footer
    </FooterContainer>
  )
};

const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #ADADAD;
    color: #FCFCFC;
    font-family: "Pretendard";
    /* position: absolute;
    bottom: 0;
    left: 0; */
    z-index: 99;
`;

export default Footer;