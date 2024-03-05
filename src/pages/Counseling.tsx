import React, { useRef, useState } from 'react'
import '../style/font/font.css';
import styled from 'styled-components';
import { IoLogoDiscord } from 'react-icons/io5';
import { CounselingText, counselingSub } from '../languages/CounselingPageTrans';
import Monitor from '../assets/images/monitorcapture.webp';
import CounselingGuide from '../components/CounselingPage/CounselingGuide';
import { BsInstagram, BsDiscord, BsTwitterX } from "react-icons/bs";

const Counseling = () => {

  const language = localStorage.getItem("language");

  const counselingTextChange = () => {
    switch (language) {
      case "japanese" :
        return counselingSub?.japanesetext;
      case "korean" :
        return counselingSub?.text;
      default :
        return counselingSub?.englishtext;
    }
  };

  const counseling = (Num : number) => {
    switch (language) {
      case "japanese" :
        return CounselingText[Num]?.japanesetext;
      case "korean" :
        return CounselingText[Num]?.text;
      default :
        return CounselingText[Num]?.englishtext;
    }
  };

  return (
    <LayOutContainer>
      <OutContainer>
        <MonitorContainer>
          <MonitorImage src={Monitor} alt=''/>
        </MonitorContainer>
        <InContainer>
          <ContentContainer>
            <TitleContainer>
              {/* <Title>
                <FaLightbulb />
              </Title> */}
              {counseling(1)}
            </TitleContainer>
            <ContentWrapper>
              <ContentBox>
                {counselingTextChange()?.map((item: any, index: number) => {
                  return (
                    (item?.isred)
                      ? <RedContent>
                        {item?.content}
                      </RedContent>
                      : <DefaultContent>
                        {item?.content}
                      </DefaultContent>
                  )
                })}
              </ContentBox>
              <TimeCheckContainer>
                {counseling(3)}
              </TimeCheckContainer>
              <ButtonAllWrapper>
                  <ButtonContainer
                    color='#7489da'
                    onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
                    <BsDiscord />
                    <ButtonText>
                      Discode
                    </ButtonText>
                  </ButtonContainer>
                  <ButtonContainer
                    color='#eb4655'
                    onClick={() => window.open("https://www.instagram.com/aria.artacademy/")}>
                    <BsInstagram />
                    <ButtonText>
                      Instagram
                    </ButtonText>
                  </ButtonContainer>
                  <ButtonContainer
                    color='#000000'
                    onClick={() => window.open("https://twitter.com/ARIA_Academy")}>
                    <BsTwitterX />
                    <ButtonText>
                      X (Twitter)
                    </ButtonText>
                  </ButtonContainer>
              </ButtonAllWrapper>
            </ContentWrapper>
          </ContentContainer>
        </InContainer>
      </OutContainer>
      <CounselingGuide />
    </LayOutContainer>
  )
};

const LayOutContainer = styled.article`
  width: 100%;
  padding: 130px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 500px) {
    padding: 50px 0px 100px 0px;
    gap: 40px;
  }
`;

const OutContainer = styled.section`
  width: 1320px;
  display: flex;
  border-bottom: 2px solid #e9e9e9;
  padding: 0px 0px 20px 0px;
  transition: all 0.3s;

  @media screen and (max-width: 1320px) {
    width: 96%;
    flex-direction: column;
    gap: 80px;
  }

  @media screen and (max-width: 500px) {
    gap: 30px;
  }
`;

const MonitorContainer = styled.div`
  min-width: 600px;
  display: flex;
  justify-content: end;
  align-items: start;
  user-select: none;

  @media screen and (max-width: 1320px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 836px) {
    min-width: 500px;
  }

  @media screen and (max-width: 500px) {
    min-width: 300px;
  }
`;

const MonitorImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
  user-select: none;

  @media screen and (max-width: 1320px) {
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    width: 40%;
  }
`;

const InContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  font-family: "Pretendard";
  font-size: 36px;
  font-weight: 800;
  line-height: 150%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 836px) {
    font-size: 28px;
    gap: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    gap: 6px;
  }
`;

const Title = styled.div`
  color: #e7e700;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 500;
  gap: 30px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    gap: 17px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  white-space: pre-line;
  gap: 24px;
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
    gap: 16px;
  }
`;

const ContentBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: end;
  gap: 5px;

  @media screen and (max-width: 1320px) {
    width: 60%;
  }

  @media screen and (max-width: 836px) {
    width: 80%;
  }
`;

const DefaultContent = styled.div`
  font-size: 18px;
  font-weight: 500;
  white-space: pre-line;

  @media screen and (max-width: 836px) {
    font-size: 15px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const RedContent = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #ff3ea3;
  white-space: pre-line;

  @media screen and (max-width: 836px) {
    font-size: 17px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const TimeCheckContainer = styled.div`
  color: #9c8282;
  font-size: 17px;

  @media screen and (max-width: 836px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const ButtonAllWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;

  @media screen and (max-width: 1320px) {
    gap: 20px;
  }

  @media screen and (max-width: 500px) {
    gap: 18px;
    margin-top: 10px;
  }
`;

const ButtonText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  color: #222020;

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const ButtonContainer = styled.div<{ color : string }>`
  width: 140px;
  height: 36px;
  font-size: 22px;
  color: #222020;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #e9e9e9;
  border-radius: 30px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};
  }

  &:hover ${ButtonText} {
    color: ${(props) => props.color};
  }

  @media screen and (max-width: 1320px) {
    font-size: 26px;
    width: 160px;
    height: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    width: 100px;
    height: 32px;
  }
`;

export default Counseling;