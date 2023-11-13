import React, { useRef, useState } from 'react'
import '../style/font/font.css';
import styled from 'styled-components';
import ApplyClasses from '../components/CounselingPage/ApplyClasses';
import AddFriends from '../components/CounselingPage/AddFriends';
import { IoLogoDiscord, IoPersonAddOutline } from 'react-icons/io5';
import { CounselingText } from '../languages/CounselingPageTrans';
import { BsDiscord } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
            <ButtonAllWrapper>
              <ButtonContainer>
                <IoPersonAddOutline />
                <ButtonText>
                  계정 친구추가
                  <AiOutlinePlus />
                </ButtonText>
              </ButtonContainer>
              <ButtonContainer onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
                <BsDiscord style={{color: "#7489da"}}/>
                <ButtonText>
                  수강 신청하러 가기
                  <MdKeyboardArrowRight />
                </ButtonText>
              </ButtonContainer>
            </ButtonAllWrapper>
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
  font-size: 36px;
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
  font-size: 17px;
  font-weight: 500;
  border-bottom: 2px solid #e9e9e9;
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
  margin-bottom: 40px;
`;

const TimeCheckContainer = styled.div`
  color: #9c8282;
  font-size: 16px;
`;

const ButtonAllWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 30px;
`;

const ButtonContainer = styled.div`
  width: 280px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ADADAD;
  font-family: "Pretendard";
  font-size: 34px;
  font-weight: 600;
  line-height: normal;
  gap: 16px;
  color: #222020;
  cursor: pointer;
`;

const ButtonText = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default Counseling;