import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import './MobileNavModal.css';
import { MdClose } from 'react-icons/md';
import { NavigateFunction } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';
import { translate } from '../../../store/Translation';
import { AlertModalOpen } from '../../../store/AlertModalOpen';
import Logo from '../../../assets/logos/logosimple.webp';
import WhiteLogo from '../../../assets/logos/whitelogo.webp';
import { TiArrowSortedDown } from "react-icons/ti";
import { BsGlobe2 } from "react-icons/bs";
import { TranslateWrapper } from '../Header';
import TranslateModal from '../TranslateModal';

interface MobileNavModalProps {
  navigate: NavigateFunction;
  hamburg: boolean;
  setHamburg: React.Dispatch<React.SetStateAction<boolean>>;
  mobileModalRef: React.RefObject<HTMLDivElement>;
  backgroundRef: React.RefObject<HTMLDivElement>;
}

const MobileNavModal : React.FC<MobileNavModalProps> = ({ navigate, hamburg, setHamburg, mobileModalRef, backgroundRef }) => {

  const language = localStorage.getItem("language");
  const [languageModal, setLanguageModal] = useState<boolean>(false);
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);

  const onClickHamburgCloseHandler = () => {
    if (mobileModalRef.current && backgroundRef.current) {
      backgroundRef.current.style.visibility = "hidden";
      mobileModalRef.current.style.transform = "translateX(-110%)";
    };
    setHamburg(false);
  };

  const languageChange = () => {
    switch (language) {
      case "japanese" :
        return "日本語";
      case "korean" :
        return "한국어";
      default :
        return "ENG";
    };
  };
  
  return (
    <div>
      <BackgroundContainer
        ref={backgroundRef}
        onClick={onClickHamburgCloseHandler}/>
      <ModalContainer
        ref={mobileModalRef}
        // className='ModalContainer'
      >
        <CloseBtnContainer>
          <TopLogoContainer src={Logo} alt=''/>
          <TranslateContainer ref={mobileModalRef}>
            <TranslateWrapper
              onClick={() => setLanguageModal(!languageModal)}>
              <BsGlobe2 />
              <TranslateText>
                {languageChange()}
              </TranslateText> 
              <TiArrowSortedDown />
            </TranslateWrapper>
          </TranslateContainer>
        </CloseBtnContainer>
        <TextWrapper>
          <Text
            onClick={() => {
              navigate("/mentor")
              onClickHamburgCloseHandler()
            }}>
            Mentor
          </Text>
          <Text
            onClick={() => {
              setAlertModal({...alertModal, isOpen: true, whatAlert: 0})
              onClickHamburgCloseHandler()
            }}>
            Showcase
          </Text>
          <Text
            onClick={() => {
              // setAlertModal({...alertModal, isOpen: true, whatAlert: 0});
              navigate("/notice");
              onClickHamburgCloseHandler()
              // setSubPage({...subPage, notice: !notice, support: false})
            }}>
            Notice
          </Text>
          <Text
            onClick={() => {
              navigate("/support/counseling");
              onClickHamburgCloseHandler()
            }}>
            Counseling
          </Text>
          <Text
            onClick={() => {
              navigate("/support/policy");
              onClickHamburgCloseHandler()
            }}>
            Policy
          </Text>
        </TextWrapper>
      </ModalContainer>
      {languageModal
        && <TranslateModal
        setLanguageModal={setLanguageModal}/>}
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
  /* opacity: 0; */
  visibility: hidden;
  background-color: #22202050;
`;

const ModalContainer = styled.div`
  width: 90%;
  height: 100%;
  background-color: #FFFFFF;
  position: fixed;
  top: 0;
  left: -110%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  user-select: none;
  transition: all 0.3s;
  box-shadow: rgba(63, 71, 77, 0.2) 5px 5px 10px 0px;
`;

const CloseBtnContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto 0px auto;
`;

const TopLogoContainer = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
`;

const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  display: none;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  background-color: #2c2a2ae1;
 /* color: #FFFFFF; */
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 101;

  &:active {
    color: #2c2a2a;
    background-color: #e9e9e9;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
 /* color: #222020; */
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  transition: all 0.3s;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
  text-indent: 40px;
`;

const SubPageButtonWrapper = styled.div`
  width: 100%;
  /* background-color: #e9e9e9; */
  box-shadow: inset rgba(63, 71, 77, 0.2) 2px 2px 5px 0px;
`;

const SubPageButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 0px;
  text-indent: 50px;
 /* color: #222020; */
  font-size: 14px;
`;

const TranslateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TranslateText = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MobileNavModal;