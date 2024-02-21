import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Image from '../../assets/images/surveimage.jpg';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AlertModalOpen } from '../../store/AlertModalOpen';
import { isLogin } from '../../store/IsLogin';
import { BiEditAlt } from "react-icons/bi";
import UpdateModal from './UpdateModal';

interface MentorCardProps {
  item: any;
  language: string | null;
  loginState: boolean;
  updateRef: React.RefObject<HTMLDivElement>;
  updateModalOpen: {mentorsId: number | null};
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<{mentorsId: number | null}>>;
};

const MentorCard : React.FC<MentorCardProps> = ({ item, language, loginState, updateRef, updateModalOpen, setUpdateModalOpen }) => {

  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useRecoilState(AlertModalOpen);
  const { mentorsId } = updateModalOpen;

  const languageTrans = () => {
    switch (language) {
      case "japanese" :
        return item?.japanesename;
      case "korean" :
        return item?.nickname;
      default :
        return "";
    };
  };

  const onClickModalOpen = () => {
    if ((mentorsId === item?.mentorsId)) {
      setUpdateModalOpen({...updateModalOpen, mentorsId: null});
    } else {
      setUpdateModalOpen({...updateModalOpen, mentorsId: item?.mentorsId});
    };
  };

  const onClickMovePageHandler = () => {
    if (item?.isopen) {
      navigate(`/mentor/detail/${item?.mentorsId}`)
    } else {
      setAlertModal({
        ...alertModal,
        isOpen: true,
        whatAlert: 1,
        content: item?.twitter,
        opendate: item?.opendate
      });
    };
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (updateRef.current && !updateRef.current.contains(event.target)) {
        setUpdateModalOpen({...updateModalOpen, mentorsId: null});
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <CardContainer onClick={onClickMovePageHandler}>
      {(loginState)
        && <UpdateButton onClick={(e) => e.stopPropagation()}>
          <Update ref={updateRef} onClick={onClickModalOpen}>
            <BiEditAlt />
          </Update>
        </UpdateButton>}
      <CardImage src={item?.thumbnailImage}/>
      <ContentContainer>
        <NicknameContainer>{item?.englishname}</NicknameContainer>
        {languageTrans()}
      </ContentContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div`
  width: 315px;
  height: 375px;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 5px 2px;
  }

  @media screen and (max-width: 1320px) {
    width: 270px;
    height: 320px;
  }

  @media screen and (max-width: 836px) {
    width: 200px;
    height: 250px;
  }

  @media screen and (max-width: 500px) {
    width: 170px;
    height: 210px;

    &:hover {
      transform: translateY(0px) scale(1);
      box-shadow: none;
    }
  }
`;

const CardImage = styled.div<{ src : string }>`
  width: 315px;
  height: 315px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: 1px solid #e9e9e9;
  
  @media screen and (max-width: 1320px) {
    width: 270px;
    height: 270px;
  }

  @media screen and (max-width: 836px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 500px) {
    width: 170px;
    height: 170px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  margin-top: 5px;
  gap: 0px;
  font-family: "Pretendard";
  font-size: 14px;
  line-height: 140%;

  @media screen and (max-width: 1320px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 836px) {
    font-size: 12px;
    margin-top: 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
    line-height: normal;
  }
`;

const NicknameContainer = styled.div`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;

  @media screen and (max-width: 836px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: normal;
  }
`;

const UpdateButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  top: -2%;
  right: -3%;
  user-select: none;
  cursor: pointer;
`;

const Update = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: #5C9DFF;
  color: #FFFFFF;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a8b2f0;

  &:hover {
    box-shadow: #2558a3 1px 1px 4px 1px;
  }
`;

export default MentorCard;