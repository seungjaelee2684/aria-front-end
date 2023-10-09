import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import LeftArrow from '../../assets/icons/leftArrow.png';
import RightArrow from '../../assets/icons/rightArrow.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import NewMentorList from './NewMentorList/NewMentorList';

const SlideShow = () => {

  const japanese = useRecoilValue(translate);

  const imageRef = useRef<HTMLDivElement>(null);
  const [slideCurrent, setSlideCurrent] = useState<number>(0);
  const slideWidth: number = 100;
  const transX: number = slideWidth * slideCurrent;

  useEffect(() => {
    if (imageRef.current) {
      // imageRef.current.style.transition = "all 1.5s ease-in-out";
      imageRef.current.style.transform = `translateX(-${transX}%)`;
    };
    const intervalId = setInterval(() => {
      if (slideCurrent === 3) {
        setSlideCurrent(0);
      } else {
        setSlideCurrent((prevSlideCurrent) => prevSlideCurrent + 1);
      }
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideCurrent]);

  const prevButton = () => {
    if (slideCurrent === 0) {
      return;
    } else {
      setSlideCurrent(slideCurrent - 1);
    };
  };

  const nextButton = () => {
    if (slideCurrent === 3) {
      return;
    } else {
      setSlideCurrent(slideCurrent + 1);
    };
  };

  console.log("슬라이드 번호", slideCurrent);

  return (
    <ImageOutContainer>
      <SlideButtonBox
        style={{ left: "30px" }}
        onClick={prevButton}>
        <SlideButton src={LeftArrow} />
      </SlideButtonBox>
      <SlideButtonBox
        style={{ right: "30px" }}
        onClick={nextButton}>
        <SlideButton src={RightArrow} />
      </SlideButtonBox>
      <NewMentorList
        japanese={japanese}
        imageRef={imageRef}
        slideCurrent={slideCurrent}/>
    </ImageOutContainer>
  )
};

const ImageOutContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

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

export default SlideShow;