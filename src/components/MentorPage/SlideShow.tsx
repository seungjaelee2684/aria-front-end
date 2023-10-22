import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import LeftArrow from '../../assets/icons/leftArrow.png';
import RightArrow from '../../assets/icons/rightArrow.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import NewMentorList from './NewMentorList/NewMentorList';
import { NewMentorListData } from '../../data/NewMentorData';
import './NewMentorList/NewMentorList.css'

const SlideShow = () => {

  const japanese = useRecoilValue(translate);

  const imageRef = useRef<HTMLDivElement>(null);
  const [slideCurrent, setSlideCurrent] = useState<number>(0);
  const [prevCurrent, setPrevCurrent] = useState<number | undefined>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideCurrent((prevSlideCurrent) => (prevSlideCurrent + 1) % (NewMentorListData.length));
      setPrevCurrent(slideCurrent);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideCurrent]);

  const prevButton = () => {
    setSlideCurrent((prevSlideCurrent) => (prevSlideCurrent - 1) % (NewMentorListData.length));
    setPrevCurrent(slideCurrent);
  };

  const nextButton = () => {
    setSlideCurrent((prevSlideCurrent) => (prevSlideCurrent + 1) % (NewMentorListData.length));
    setPrevCurrent(slideCurrent);
  };

  console.log("슬라이드 번호", slideCurrent);

  return (
    <div>
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
        key={slideCurrent}
        japanese={japanese}
        imageRef={imageRef}
        slideCurrent={slideCurrent}
        prevCurrent={prevCurrent}
        setPrevCurrent={setPrevCurrent}
        />
      <SlideNumberContainer>
        {NewMentorListData?.map((item : any) => {
          return (
            (slideCurrent === NewMentorListData.indexOf(item))
              ? <SlideNumber
                style={{backgroundColor: "#FCFCFC"}}/>
              : <SlideNumber />
          )
        })}
      </SlideNumberContainer>
    </ImageOutContainer>
    
    </div>
  )
};

const ImageOutContainer = styled.div`
  width: 100%;
  height: 700px;
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
  z-index: 88;
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

const SlideNumberContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  gap: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const SlideNumber = styled.div`
  min-width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #686868;
`;

export default SlideShow;