import React from 'react'
import styled from 'styled-components';
import LogoImage from '../assets/logos/logosimple.png';

const Check = () => {
  return (
    <LayoutContainer>
        <ItemContainer>
            <ItemWrapper>
                <TopLineContainer>
                    <LogoContainer>
                        <Logo src={LogoImage}/>
                        <LogoText>사이트 점검 안내</LogoText>
                    </LogoContainer>
                </TopLineContainer>
                <ContentWrapper>
                    <TitleContainer>
                        시스템 점검중...
                    </TitleContainer>
                    <ContentContainer>
                        <Text>
                            보다 나은 서비스를 제공하기 위해 점검중입니다.
                        </Text>
                        <Text>
                            불편을 끼쳐드려 죄송합니다.
                        </Text>
                    </ContentContainer>
                </ContentWrapper>
            </ItemWrapper>
        </ItemContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFF;
    position: relative;
    z-index: 101;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: end;
    gap: 24px;
    margin-bottom: 20px;
`;

const Logo = styled.img`
    width: 160px;
    height: 80px;
    object-fit: contain;
`;

const LogoText = styled.div`
    font-family: "Pretendard";
    font-size: 40px;
    font-weight: 600;
    line-height: normal;
    color: #222020;
`;

const ItemContainer = styled.div`
    width: 60%;
    height: 100%;
    margin: 0px auto;
    /* background-color: #e9e9e9; */
    color: #222020;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`;

const TopLineContainer = styled.div`
    width: 100%;
    border-bottom: 4px solid #222020;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    margin-top: 180px;
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.div`
    font-family: "Pretendard";
    font-size: 40px;
    font-weight: 800;
    line-height: 150%; 
    margin-top: 60px;
`;

const ContentContainer = styled.div`
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
`;

const Text = styled.div`
    color: #ADADAD;
`;

export default Check;