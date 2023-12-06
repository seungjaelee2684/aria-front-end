import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import './MobileNavModal.css';
import { MdClose } from 'react-icons/md';
import { NavigateFunction } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';
import { translate } from '../../../store/Translation';
import { AlertModalOpen } from '../../../store/AlertModalOpen';

interface MobileNavModalProps {
  navigate: NavigateFunction;
  hamburg: boolean;
  setHamburg: React.Dispatch<React.SetStateAction<boolean>>;
  mobileModalRef: React.RefObject<HTMLDivElement>;
  backgroundRef: React.RefObject<HTMLDivElement>;
}

const MobileNavModal : React.FC<MobileNavModalProps> = ({ navigate, hamburg, setHamburg, mobileModalRef, backgroundRef }) => {

  const language = useRecoilValue(translate);
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);
  const [subPage, setSubPage] = useState<{ notice: boolean, support: boolean }>({
    notice: false,
    support: false
  });
  const { notice, support } = subPage;

  const onClickHamburgCloseHandler = () => {
    if (mobileModalRef.current && backgroundRef.current) {
      backgroundRef.current.style.visibility = "hidden";
      mobileModalRef.current.style.transform = "translateX(-350px)";
    };
    setHamburg(false);
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
          <CloseBtn onClick={onClickHamburgCloseHandler}>
            <MdClose />
          </CloseBtn>
        </CloseBtnContainer>
        <TextWrapper>
          <Text
            onClick={() => {
              navigate("/mentor")
              setHamburg(false)
            }}>
            Mentor
          </Text>
          <Text
            onClick={() => {
              setAlertModal({...alertModal, isOpen: true, whatAlert: 0})
              setHamburg(false)
            }}>
            Showcase
          </Text>
          <Text
            onClick={() => {
              navigate("/notice/notification");
              setHamburg(false)
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
                  setHamburg(false)
                }}>
                Event
              </SubPageButton>
              <SubPageButton
                onClick={() => {
                  setAlertModal({...alertModal, isOpen: true, whatAlert: 0})
                  setHamburg(false)
                }}>
                Announcements
              </SubPageButton>
            </SubPageButtonWrapper>}
          <Text
            onClick={() => {
              setSubPage({...subPage, notice: false, support: !support})
            }}>
            Support
          </Text>
          {(support)
            && <SubPageButtonWrapper>
              <SubPageButton
                style={{borderBottom: "1px dotted #e9e9e9"}}
                onClick={() => {
                  navigate("/counseling")
                  setHamburg(false)
                }}>
                Counseling
              </SubPageButton>
              <SubPageButton
                onClick={() => {
                  navigate("/policy")
                  setHamburg(false)
                }}>
                Policy
              </SubPageButton>
            </SubPageButtonWrapper>}
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
  /* opacity: 0; */
  visibility: hidden;
  background-color: #22202050;
`;

const ModalContainer = styled.div`
  width: 350px;
  height: 100%;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: -350px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 15px 15px 0px;
  background-color: #ebfeff;
  z-index: 100;
  user-select: none;
  transition: all 0.5s;
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
  padding: 30px 30px;
`;

const SubPageButtonWrapper = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset rgba(63, 71, 77, 0.2) 2px 2px 5px 0px;
`;

const SubPageButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 50px 20px 50px;
  color: #222020;
  font-size: 14px;
`;

export default MobileNavModal;