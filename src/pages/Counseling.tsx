import React, { useRef, useState } from 'react'
import '../style/font/font.css';
import styled from 'styled-components';
import { IoLogoDiscord, IoPersonAddOutline } from 'react-icons/io5';
import { CounselingText } from '../languages/CounselingPageTrans';
import { BsDiscord } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CopyAlert } from '../store/CopyAlert';
import { translate } from '../store/Translation';
import Monitor from '../assets/images/monitorcapture.webp';
import Capture from '../assets/icons/search.png';
import PopUp from '../components/common/PopUp';
import CounselingGuide from '../components/CounselingPage/CounselingGuide';

const Counseling = () => {

  const language = localStorage.getItem("language");

  const counseling = (Num : number) => {
    switch (language) {
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
      <OutContainer>
        <MonitorContainer>
          <MonitorImage src={Monitor} alt=''/>
        </MonitorContainer>
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
                <ButtonContainer
                  onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
                  {counseling(5)}
                  <ButtonText>
                    <BsDiscord />
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

const LayOutContainer = styled.div`
  width: 100%;
  margin: 130px auto 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 500px) {
    margin: 70px auto 0px auto;
    gap: 50px;
  }
`;

const OutContainer = styled.div`
  width: 1320px;
  display: flex;
  border-bottom: 2px solid #e9e9e9;
  padding: 0px 0px 20px 0px;
  transition: all 0.3s;
  /* flex-direction: column; */

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
    width: 60%;
  }
`;

// const MonitorCaptureImg = styled.img`
//   width: 99%;
//   height: 70%;
//   object-fit: cover;
//   position: absolute;
//   top: 1px;
//   left: 2px;
// `;

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
  color: #222020;
  gap: 16px;

  @media screen and (max-width: 836px) {
    font-size: 28px;
    gap: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
    gap: 8px;
  }
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
  color: #222020;
  gap: 24px;
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const TimeCheckContainer = styled.div`
  color: #9c8282;
  font-size: 17px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const ButtonAllWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    gap: 16px;
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  width: 360px;
  height: 60px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-indent: 30px;
  border: 1px solid #ADADAD;
  border-radius: 3px;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  position: relative;
  gap: 20px;
  background-color: #7489da;
  color: #FCFCFC;
  transition: all 0.3s ease-in-out;
  user-select: none;
  cursor: pointer;

  &:hover {
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    /* box-shadow: #7489da 0px 0px 3px 1px; */
  }

  @media screen and (max-width: 500px) {
    width: 280px;
    height: 40px;
    text-indent: 20px;
    font-size: 14px;
  }
`;

const ButtonText = styled.div`
  font-size: 80px;
  color: #FCFCFC;
  position: absolute;
  top: -10px;
  right: 8%;
  transform: rotate(25deg);

  @media screen and (max-width: 500px) {
    font-size: 60px;
    right: 5%;
    top: -5px;
  }
`;

export default Counseling;