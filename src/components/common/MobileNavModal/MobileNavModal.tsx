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
import { TiArrowSortedUp } from "react-icons/ti";
import { BsGlobe2 } from "react-icons/bs";
import { TranslateWrapper } from '../Header';
import TranslateModal from '../TranslateModal';
import { MdOutlineDarkMode } from "react-icons/md";

interface MobileNavModalProps {
  navigate: NavigateFunction;
  hamburg: boolean;
  setHamburg: React.Dispatch<React.SetStateAction<boolean>>;
  mobileModalRef: React.RefObject<HTMLDivElement>;
  backgroundRef: React.RefObject<HTMLDivElement>;
}

const MobileNavModal : React.FC<MobileNavModalProps> = ({ navigate, hamburg, setHamburg, mobileModalRef, backgroundRef }) => {

  const language = localStorage.getItem("language");
  const darkmode = localStorage.getItem("darkmode");
  const subModalRef = useRef<HTMLDivElement>(null);
  const [languageModal, setLanguageModal] = useState<boolean>(false);
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);
  const [subPage, setSubPage] = useState<{ notice: boolean, support: boolean }>({
    notice: false,
    support: false
  });
  const { notice, support } = subPage;

  const onClickHamburgCloseHandler = () => {
    if (mobileModalRef.current && backgroundRef.current) {
      backgroundRef.current.style.visibility = "hidden";
      mobileModalRef.current.style.transform = "translateX(-110%)";
    };
    setHamburg(false);
  };

  const languageChange = () => {
    switch (language) {
      case "chinese" :
        return "中文";
      case "japanese" :
        return "日本語";
      case "korean" :
        return "한국어";
      default :
        return "ENG";
    };
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (subModalRef.current && !subModalRef.current.contains(event.target)) {
        setSubPage({...subPage, notice: false, support: false});
      };
      if (subModalRef.current && !subModalRef.current.contains(event.target)) {
        setSubPage({...subPage, notice: false, support: false});
      };
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <div>
      <BackgroundContainer
        ref={backgroundRef}
        onClick={onClickHamburgCloseHandler}/>
      <ModalContainer
        ref={mobileModalRef}
        style={{backgroundColor: `${(darkmode === "dark") ? "#222020" : "#FFFFFF"}`}}
        // className='ModalContainer'
      >
        <CloseBtnContainer>
          <TopLogoContainer src={(darkmode === "dark") ? WhiteLogo : Logo} alt=''/>
          <TranslateContainer ref={mobileModalRef}>
            <TranslateWrapper
              style={{color: `${(darkmode === "dark") ? "#FCFCFC" : "#222020"}`}}
              onClick={() => setLanguageModal(!languageModal)}>
              <BsGlobe2 />
              <TranslateText>
                {languageChange()}
              </TranslateText> 
              <TiArrowSortedDown />
            </TranslateWrapper>
            <TranslateWrapper
              style={{
                color: `${(darkmode === "dark") ? "#FCFCFC" : "#222020"}`,
                fontSize: "18px"
              }}
              onClick={() => {
                if (darkmode === "dark") {
                  localStorage.setItem("darkmode", "light");
                  window.location.reload();
                } else {
                  localStorage.setItem("darkmode", "dark");
                  window.location.reload();
                };
              }}>
              <MdOutlineDarkMode />
              <TranslateText style={{fontFamily: "Pretendard", fontWeight: "500"}}>
                {(darkmode === "dark") ? "Light" : "Dark"}
              </TranslateText> 
            </TranslateWrapper>
          </TranslateContainer>
        </CloseBtnContainer>
        <TextWrapper style={{color: `${(darkmode === "dark") ? "#FCFCFC" : "#222020"}`}}>
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
              navigate("/notice/notification");
              onClickHamburgCloseHandler()
              // setSubPage({...subPage, notice: !notice, support: false})
            }}>
            Notice
          </Text>
          {(notice)
            && <SubPageButtonWrapper>
              <SubPageButton
                style={{borderBottom: "1px dotted #e9e9e9"}}
                onClick={() => {
                  setAlertModal({...alertModal, isOpen: true, whatAlert: 0})
                  onClickHamburgCloseHandler()
                }}>
                Event
              </SubPageButton>
              <SubPageButton
                onClick={() => {
                  setAlertModal({...alertModal, isOpen: true, whatAlert: 0})
                  onClickHamburgCloseHandler()
                }}>
                Announcements
              </SubPageButton>
            </SubPageButtonWrapper>}
          <Text
            ref={subModalRef}
            onClick={() => {
              setSubPage({...subPage, notice: false, support: !support})
            }}>
            Support
            {(support)
              ? <TiArrowSortedUp style={{marginRight: "30px"}}/>
              : <TiArrowSortedDown style={{marginRight: "30px"}}/>}
          </Text>
          {(support)
            && <SubPageButtonWrapper
              style={{
                backgroundColor: `${(darkmode === "dark") ? "#3b3939" : "#f9f9f9"}`,
              }}>
              <SubPageButton
                style={{borderBottom: `${(darkmode === "dark") ? "1px dotted #ADADAD" :"1px dotted #e9e9e9"}`}}
                onClick={() => {
                  navigate("/support/counseling")
                  onClickHamburgCloseHandler()
                }}>
                Counseling
              </SubPageButton>
              <SubPageButton
                onClick={() => {
                  navigate("/support/policy")
                  onClickHamburgCloseHandler()
                }}>
                Policy
              </SubPageButton>
            </SubPageButtonWrapper>}
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