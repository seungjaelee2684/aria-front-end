import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { mentorListData } from '../data/MentorDate';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';

const MentorDetail = () => {

    const { id } = useParams();
    console.log("id ->", id);
    const japanese = useRecoilValue(translate);
    const mentorInfo = mentorListData?.filter((item) => item.id === id);
    console.log("mentor ->", mentorInfo)

  return (
    <LayoutContainer>
        <TextWrapper>
            <KeyText>{japanese ? "ニックネーム :" : "닉네임 :"}</KeyText>
            <ValueText>{japanese ? mentorInfo[0]?.englishname : mentorInfo[0]?.nickname}</ValueText>
        </TextWrapper>
        <TextWrapper>
            <KeyText>{japanese ? "作品 ->" : "작품 ->"}</KeyText>
            <ImageBox src={mentorInfo[0]?.image} />
        </TextWrapper>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    padding: 70px 0px;
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

const KeyText = styled.div`
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
`;

const ValueText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
`;

const ImageBox = styled.div<{ src : string }>`
    width: 56px;
    height: 56px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export default MentorDetail;