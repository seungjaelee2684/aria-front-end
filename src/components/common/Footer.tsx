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
          <LeftTopLaneContainer>
            <Text>
              내용내용
            </Text>
            <Text>
              내용내용
            </Text>
            <Text>
              내용내용
            </Text>
          </LeftTopLaneContainer>
        </TopLaneHeader>
        <FooterOutWrapper>
          <LogoContainer src={FooterLogo}/>
          <FirstWrapper>
            <Title>
              개인정보 처리방침
            </Title>
            <ContentBox>
              <Content>
                주소: 서울특별시 블라블라 블라블라
              </Content>
              <Content>
                개인정보 처리방침
              </Content> 
              <Content>
                개인정보 처리방침
              </Content> 
            </ContentBox>
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
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const LeftTopLaneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #e9e9e9; 
`;

const Text = styled.div`
  font-size: 16px;
`;

const FooterOutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
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
  text-align: start;
  gap: 30px;
`;

const Title = styled.div`

`;

const ContentBox = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Content = styled.div`

`;

export default Footer;