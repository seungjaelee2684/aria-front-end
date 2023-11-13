import React, { useRef, useState } from 'react'
import '../style/font/font.css';
import styled from 'styled-components';
import ApplyClasses from '../components/CounselingPage/ApplyClasses';
import AddFriends from '../components/CounselingPage/AddFriends';
import { IoLogoDiscord } from 'react-icons/io5';
import { CounselingText } from '../languages/CounselingPageTrans';

const Counseling = () => {

  const language = localStorage.getItem("language");
  const leverRef = useRef<HTMLDivElement>(null);

  const counseling = (Num : number) => {
    switch (language) {
      case "english" :
        return CounselingText[Num]?.englishtext;
      case "chinese" :
        return CounselingText[Num]?.chinesetext;
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
      <InContainer>
        <ContentContainer>
          <TitleContainer>
            <Title>
              <IoLogoDiscord />
              {counseling(0)}
            </Title>
            {counseling(1)}
          </TitleContainer>
          <ContentWrapper>
            {counseling(2)}
            <TimeCheckContainer>
              {counseling(3)}
            </TimeCheckContainer>
          </ContentWrapper>
        </ContentContainer>
      </InContainer>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto;
`;

const InContainer = styled.div`
  width: 1320px;
  margin: 140px auto;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  font-family: "Pretendard";
  font-size: 40px;
  font-weight: 800;
  line-height: 150%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222020;
  gap: 16px;
`;

const Title = styled.div`
  color: #7489da;
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
  font-size: 22px;
  font-weight: 500;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  white-space: pre-line;
  color: #222020;
  gap: 16px;
`;

const TimeCheckContainer = styled.div`
  color: #858585;
  font-size: 20px;
`;

export default Counseling;