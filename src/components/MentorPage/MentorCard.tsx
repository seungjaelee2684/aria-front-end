import React from 'react'
import styled from 'styled-components';
import Image from '../../assets/images/surveimage.jpg';

const MentorCard = ({ item, japanese } : any) => {
  return (
    <CardContainer>
      <CardImage src={item?.image}/>
      <ContentContainer>
        <NicknameContainer>{item?.englishname}</NicknameContainer>
        {japanese ? "" : `(${item?.nickname})`}
      </ContentContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div`
  width: 320px;
  height: 390px;
  /* border: 1px solid; */
  /* border-radius: 10px; */
  background-color: #FFFFFF;
  box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 5px 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }
`;

const CardImage = styled.div<{ src : string }>`
  width: 320px;
  height: 320px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* border-radius: 10px; */
  border: 1px solid #e9e9e9;
`;

const ContentContainer = styled.div`
  display: grid;
  margin-top: 10px;
  gap: 0px;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 140%;
`;

const NicknameContainer = styled.div`
  font-family: "Pretendard";
  font-size: 18px;
  color: #222020;
  font-weight: 600;
  line-height: 150%;
`;

export default MentorCard;