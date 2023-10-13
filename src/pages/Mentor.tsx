import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../store/Translation';
import Image from '../assets/images/testImage.png';
import Image2 from '../assets/images/mainimage.jpg';
import MentorList from '../components/MentorPage/MentorList';
import LeftArrow from '../assets/icons/leftArrow.png';
import RightArrow from '../assets/icons/rightArrow.png';
import FilterButton from '../components/MentorPage/FilterButton';
import SlideShow from '../components/MentorPage/SlideShow';

const Mentor = () => {

  const japanese = useRecoilValue(translate);

  return (
    <LayoutContainer>
      <LayoutInWrapper>
        <SlideShow />
      </LayoutInWrapper>
      <FilterButton />
      <MentorList japanese={japanese} />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 80px 0px;
`;

const LayoutInWrapper = styled.div`
  width: 100%;
`;

const ImageOutContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const ImageSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MentorWrapper = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #f3f3f3;
`;

const ImageBox = styled.div<{ src : string }>`
  width: 45%;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const IntroduceMentorContainer = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  color: #222020;
  font-weight: 800;
  line-height: 150%;
  max-width: 15%;
  max-height: 550px;
  display: grid;
  gap: 20px;
  user-select: none;
`;

const IntroduceText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  color: #222020;
  font-weight: 400;
  line-height: 140%;
`

const SlideBtnWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SlideButtonBox = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 325px;
  border: 2px solid #FFFFFF;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7e7e7e;
  opacity: 0.4;
  z-index: 100;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SlideButton = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
`;

export default Mentor;