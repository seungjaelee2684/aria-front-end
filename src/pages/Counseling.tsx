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
import Monitor from '../assets/images/monitor.png';

const Counseling = () => {

  const language = useRecoilValue(translate);
  const leverRef = useRef<HTMLDivElement>(null);
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
                  boxcolor="#2a9fff">
                  <IoPersonAddOutline />
                  <ButtonText>
                  {counseling(4)}
                    <AiOutlinePlus />
                  </ButtonText>
                </ButtonContainer>
                <ButtonContainer
                  boxcolor="#2e1388"
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
  padding-bottom: 50px;
  /* flex-direction: column; */

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const MonitorContainer = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MonitorImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
`;

const InContainer = styled.div`
  width: 50%;
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

const ButtonContainer = styled.div<{ boxcolor : string }>`
  width: 300px;
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
  gap: 20px;
  color: #222020;
  transition: all 0.3s ease-in-out;
  user-select: none;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.boxcolor};
  }
`;

const ButtonText = styled.div`
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default Counseling;