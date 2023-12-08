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
import { useRecoilState, useRecoilValue } from 'recoil';
import { CopyAlert } from '../store/CopyAlert';
import { translate } from '../store/Translation';
import Monitor from '../assets/images/monitorcapture.png';
import Capture from '../assets/images/discordcapture.png';

const Counseling = () => {

  const language = useRecoilValue(translate);
  const alertRef = useRef<HTMLDivElement>(null);
  const [, setCopyHandler] = useRecoilState(CopyAlert);

  const onClickCopyHandler = async ( text : string ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyHandler(true)
      console.log("복사된 링크 -> ", text);
    } catch (e) {
      alert("복사에 실패하였습니다.");
      console.log("Error -> ", e);
    };
  };

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
                  onClick={() => onClickCopyHandler("code")}
                  color="#2a9fff">
                  <IoPersonAddOutline />
                  <ButtonText>
                  {counseling(4)}
                    <AiOutlinePlus />
                  </ButtonText>
                </ButtonContainer>
                <ButtonContainer
                  color="#2e1388"
                  onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
                  <BsDiscord style={{color: "#7489da"}}/>
                  <ButtonText>
                    {counseling(5)}
                    <MdKeyboardArrowRight />
                  </ButtonText>
                </ButtonContainer>
              </ButtonAllWrapper>
            </ContentWrapper>
          </ContentContainer>
        </InContainer>
      </OutContainer>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto;
`;

const OutContainer = styled.div`
  width: 1320px;
  margin: 130px auto 0px auto;
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
    margin: 80px auto 0px auto;
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

  @media screen and (max-width: 1320px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
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
  font-size: 17px;
  font-weight: 500;
  gap: 30px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    gap: 16px;
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
  font-size: 16px;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const ButtonAllWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    gap: 16px;
    margin-top: 20px;
  }
`;

const ButtonContainer = styled.div<{ color : string }>`
  width: 260px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ADADAD;
  font-family: "Pretendard";
  font-size: 40px;
  font-weight: 600;
  line-height: normal;
  gap: 20px;
  color: #222020;
  transition: all 0.3s ease-in-out;
  user-select: none;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.color};
  }

  @media screen and (max-width: 500px) {
    width: 180px;
    height: 90px;
    gap: 12px;
    font-size: 26px;
  }
`;

const ButtonText = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export default Counseling;