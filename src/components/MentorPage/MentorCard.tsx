import React from 'react'
import styled from 'styled-components';
import Image from '../../assets/images/surveimage.jpg';
import { useNavigate } from 'react-router-dom';

const MentorCard = ({ item, japanese } : any) => {

  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/mentor/detail/${item?.id}`)}>
      <CardImage src={item?.image}/>
      <ContentContainer>
        <NicknameContainer>{item?.englishname}</NicknameContainer>
        {japanese ? "" : `(${item?.nickname})`}
      </ContentContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div`
  width: 300px;
  height: 360px;
  /* border: 1px solid; */
  /* border-radius: 10px; */
  background-color: #FFFFFF;
  
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 5px 2px;
  }

  @media screen and (max-width: 1272px) {
    width: 180px;
    height: 240px;
  }
  @media screen and (max-width: 588px) {
    width: 156px;
    height: 216px;
  }
`;

const CardImage = styled.div<{ src : string }>`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* border-radius: 10px; */
  border: 1px solid #e9e9e9;

  @media screen and (max-width: 1272px) {
    width: 180px;
    height: 180px;
  }
  @media screen and (max-width: 588px) {
    width: 156px;
    height: 156px;
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

  @media screen and (max-width: 1272px) {
    font-size: 12px;
    line-height: normal;
  }
`;

const NicknameContainer = styled.div`
  font-family: "Pretendard";
  font-size: 18px;
  color: #222020;
  font-weight: 600;
  line-height: 150%;

  @media screen and (max-width: 1272px) {
    font-size: 16px;
    line-height: normal;
  }
`;

export default MentorCard;