import React from 'react'
import styled from 'styled-components';
import Image from '../../assets/images/surveimage.jpg';
import { useNavigate } from 'react-router-dom';

const MentorCard = ({ item, language } : any) => {

  const navigate = useNavigate();

  const languageTrans = () => {
    switch (language) {
      case "chinese" :
        return item?.chinesename;
      case "japanese" :
        return item?.japanesename;
      case "korean" :
        return item?.nickname;
      default :
        return "";
    };
  };

  return (
    <CardContainer onClick={() => navigate(`/mentor/detail/${item?.id}`)}>
      <CardImage src={item?.image}/>
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
  /* border: 1px solid; */
  /* border-radius: 10px; */
  background-color: #FFFFFF;
  /* overflow: hidden; */
  transition: all 0.2s ease-in-out;

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
  /* border-radius: 10px; */
  border: 1px solid #e9e9e9;

  /* @media screen and (max-width: 1320px) {
    width: 180px;
    height: 180px;
  } */
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
  color: #39373A;

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
  color: #222020;
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

export default MentorCard;