import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import NewMentorList from './NewMentorList/NewMentorList';
// import { NewMentorListData } from '../../data/NewMentorData';
import './NewMentorList/NewMentorList.css'
import { useQuery } from 'react-query';
import { getNewMentorBannerApi } from '../../api/banner';

const SlideShow = ({ NewMentorListData } : any) => {

  const imageRef = useRef<HTMLDivElement>(null);
  const [slideCurrent, setSlideCurrent] = useState<number>(0);
  const [prevCurrent, setPrevCurrent] = useState<number | undefined>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideCurrent((prevSlideCurrent) => (prevSlideCurrent + 1) % (NewMentorListData?.length));
      setPrevCurrent(slideCurrent);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideCurrent]);

  const prevButton = () => {
    if (slideCurrent === 0) {
      setSlideCurrent(NewMentorListData?.length - 1);
      setPrevCurrent(0);
    } else {
      setSlideCurrent((prevSlideCurrent) => (prevSlideCurrent - 1) % (NewMentorListData?.length));
      setPrevCurrent(slideCurrent);
    };
  };

  const nextButton = () => {
    setSlideCurrent((prevSlideCurrent) => (prevSlideCurrent + 1) % (NewMentorListData?.length));
    setPrevCurrent(slideCurrent);
  };

  // ("슬라이드 번호", slideCurrent);

  return (
    <ImageOutContainer>
      <SlideLeftButtonBox
        onClick={prevButton}>
        <IoIosArrowBack />
      </SlideLeftButtonBox>
      <SlideRightButtonBox
        onClick={nextButton}>
        <IoIosArrowForward />
      </SlideRightButtonBox>
      <NewMentorList
        key={slideCurrent}
        imageRef={imageRef}
        slideCurrent={slideCurrent}
        prevCurrent={prevCurrent}
        setPrevCurrent={setPrevCurrent}
        NewMentorListData={NewMentorListData}
        />
      <SlideNumberContainer>
        {NewMentorListData?.map((item : any, index: number) => {
          return (
            (slideCurrent === index)
              ? <SlideNumber
                key={item?.id}
                style={{
                  cursor: "default",
                  backgroundColor: "#FCFCFC",
                  minWidth: "40px",
                  borderRadius: "20px"}}/>
              : <SlideNumber
                key={item?.id}
                onClick={() => {
                  setSlideCurrent(index);
                  setPrevCurrent(slideCurrent);
                }}/>
          )
        })}
      </SlideNumberContainer>
    </ImageOutContainer>
  )
};

const ImageOutContainer = styled.div`
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 836px) {
    height: 260px;
  }

  @media screen and (max-width: 500px) {
    width: 96%;
    margin: 0px auto;
    border-radius: 10px;
  }
`;

const SlideLeftButtonBox = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 325px;
  left: 70px;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #888888;
  opacity: 0.4;
  z-index: 88;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1320px) {
    left: 50px;
  }

  @media screen and (max-width: 836px) {
    left: 10px;
    top: 115px;
    width: 30px;
    height: 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    border: 1px solid #FFFFFF;
  }
`;

const SlideRightButtonBox = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 325px;
  right: 70px;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #888888;
  opacity: 0.4;
  z-index: 88;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1320px) {
    right: 50px;
  }

  @media screen and (max-width: 836px) {
    right: 10px;
    top: 115px;
    width: 30px;
    height: 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    border: 1px solid #FFFFFF;
  }
`;

const SlideButton = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;

  @media screen and (max-width: 836px) {
    width: 24px;
    height: 24px;
  }
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
  min-width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #4e4e4e;
  box-shadow: 1px 1px 6px 0px #535353;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
`;

export default SlideShow;