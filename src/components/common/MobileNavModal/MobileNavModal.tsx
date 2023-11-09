import React from 'react'
import styled from 'styled-components';
import './MobileNavModal.css';
import { MdClose } from 'react-icons/md';
import { NavigateFunction } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';
import { translate } from '../../../store/Translation';

interface MobileNavModalProps {
  navigate: NavigateFunction;
  hamburg: boolean;
  setHamburg: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavModal : React.FC<MobileNavModalProps> = ({ navigate, hamburg, setHamburg }) => {

  const language = useRecoilValue(translate);

  const onClickReadyHandler = () => {
    switch (language) {
      case "english" :
        return alert("Coming soon");
      case "chinese" :
        return alert("正在准备。");
      case "japanese" :
        return alert("準備中です。");
      default :
        return alert("준비중입니다.");
    };
  };
  
  return (
    <div>
      <BackgroundContainer onClick={() => setHamburg(false)}/>
      <ModalContainer className='ModalContainer'>
        <CloseBtnContainer>
          <CloseBtn onClick={() => setHamburg(false)}>
            <MdClose />
          </CloseBtn>
        </CloseBtnContainer>
        <TextWrapper>
          <Text
            onClick={() => {
              navigate("/")
              setHamburg(false)
            }}>
            Home
          </Text>
          <Text
            onClick={() => {
              navigate("/mentor")
              setHamburg(false)
            }}>
            Mentor
          </Text>
          <Text
            onClick={() => {
              navigate("/notice")
              setHamburg(false)
            }}>
            Notice
          </Text>
          <SurvePageButton
            onClick={() => {
              navigate("/notice")
              setHamburg(false)
            }}>
            Event
          </SurvePageButton>
          <SurvePageButton
            onClick={() => {
              navigate("/notice/notification")
              setHamburg(false)
            }}>
            Announcements
          </SurvePageButton>
          <Text
            onClick={() => {
              onClickReadyHandler();
            }}>
            H.O.F
          </Text>
          <Text
            onClick={() => {
              navigate("/support")
              setHamburg(false)
            }}>
            Support
          </Text>
          <SurvePageButton>
            Schedule
          </SurvePageButton>
          <SurvePageButton>
            Counseling
          </SurvePageButton>
          <SurvePageButton>
            Policy
          </SurvePageButton>
        </TextWrapper>
      </ModalContainer>
    </div>
  )
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  background-color: #22202050;
`;

const ModalContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 0px 15px 15px 0px;
  background-color: #ebfeff;
  z-index: 100;
  user-select: none;
  box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
`;

const CloseBtnContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px auto 0px auto;
`;

const CloseBtn = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-family: "Pretendard";
  font-size: 36px;
  font-weight: 600;
  line-height: normal;
  color: #222020;

  &:active {
    background-color: #e9e9e9;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: #222020;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 30px;
`;

const SurvePageButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 50px 10px 50px;
  color: #ADADAD;
  font-size: 14px;
`;

export default MobileNavModal;