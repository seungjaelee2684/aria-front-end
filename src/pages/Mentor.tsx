import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { translate } from '../store/Translation';
import Image from '../assets/images/testImage.png';
import Image2 from '../assets/images/mainimage.jpg';
import MentorList from '../components/MentorPage/MentorList';
import LeftArrow from '../assets/icons/leftArrow.png';
import RightArrow from '../assets/icons/rightArrow.png';

const Mentor = () => {

  const japanese = useRecoilValue(translate);

  const imageRef = useRef<HTMLDivElement>(null);
  const [slideCurrent, setSlideCurrent] = useState<number>(0);
  const slideWidth : number = 100;
  const transX : number = slideWidth * slideCurrent;

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transition = "all 1.5s ease-in-out";
      imageRef.current.style.transform = `translateX(-${transX}%)`;
    };
  }, [slideCurrent]);

  useEffect(() => {
    setTimeout(() => {
      if (slideCurrent === 3) {
        setSlideCurrent(0);
      } else {
        setSlideCurrent(slideCurrent + 1);
      };
    }, 8000);
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

  return (
    <LayoutContainer>
      <LayoutInWrapper>
        <ImageOutContainer>
          <SlideButtonBox
            style={{left: "10px"}}
            onClick={prevButton}>
            <SlideButton src={LeftArrow}/>
          </SlideButtonBox>
          <SlideButtonBox
            style={{right: "10px"}}
            onClick={nextButton}>
            <SlideButton src={RightArrow}/>
          </SlideButtonBox>
          <ImageSlideContainer ref={imageRef}>
            <MentorWrapper>
              <ImageBox src={Image}></ImageBox>
              <IntroduceMentorContainer>
                {japanese ? "メンター 先生" : "멘토 선생님"}
                <IntroduceText>
                  {japanese
                    ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                </IntroduceText>
              </IntroduceMentorContainer>
            </MentorWrapper>
            <MentorWrapper>
              <ImageBox src={Image2}></ImageBox>
              <IntroduceMentorContainer>
                {japanese ? "メンター 先生" : "멘토 선생님"}
                <IntroduceText>
                  {japanese
                    ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                </IntroduceText>
              </IntroduceMentorContainer>
            </MentorWrapper>
            <MentorWrapper>
              <ImageBox src={Image}></ImageBox>
              <IntroduceMentorContainer>
                {japanese ? "メンター 先生" : "멘토 선생님"}
                <IntroduceText>
                  {japanese
                    ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                </IntroduceText>
              </IntroduceMentorContainer>
            </MentorWrapper>
            <MentorWrapper>
              <ImageBox src={Image2}></ImageBox>
              <IntroduceMentorContainer>
                {japanese ? "メンター 先生" : "멘토 선생님"}
                <IntroduceText>
                  {japanese
                    ? "内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
                    : "내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                </IntroduceText>
              </IntroduceMentorContainer>
            </MentorWrapper> 
          </ImageSlideContainer>
        </ImageOutContainer>
        {japanese ? "講師ページ" : "강사페이지"}
      </LayoutInWrapper>
      <MentorList japanese={japanese} />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 70px 0px;
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
  background-color: #222020;
`;

const ImageBox = styled.div<{ src : string }>`
  width: 45%;
  height: 400px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const IntroduceMentorContainer = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  color: #FCFCFC;
  font-weight: 800;
  line-height: 150%;
  max-width: 15%;
  max-height: 400px;
  display: grid;
  gap: 20px;
  user-select: none;
`;

const IntroduceText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  color: #FCFCFC;
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
  width: 34px;
  height: 34px;
  position: absolute;
  top: 184px;
  border: 2px solid #FFFFFF;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7e7e7e;
  opacity: 0.3;
  z-index: 100;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const SlideButton = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
`;

export default Mentor;