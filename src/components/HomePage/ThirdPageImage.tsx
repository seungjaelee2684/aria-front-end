import React, { useState } from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper, MainLayout } from './FirstPageImage';
import ThirdBG from '../../assets/images/mainpage/3.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';
import MainSlideShow from './MainSlideShow';
import SlideBG from '../../assets/images/mainpage/Asset 94.webp';
import { MainBannertData } from '../../data/MainBannerData';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {

  const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(1);
  
  const scrollIndex = useRecoilValue(MainPageNumber);

  const onClickMainPrevHandler = () => {
    if (mainSlideCurrent === 0) {
      setMainSlideCurrent(MainBannertData?.length - 1);
    } else {
      setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent - 1) % (MainBannertData.length));
    };
  };

  const onClickMainNextHandler = () => {
    setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
  };

  return (
    <ThirdImageBoxWrapper>
      <BackgroundImage src={ThirdBG} alt=''/>
      <ThirdMainLayout className={(scrollIndex === 3) ? "third-content" : ""}>
        <SlideContainer>
          <SlideBorderLine src={SlideBG} alt=''/>
          <MainSlideShow
            mainSlideCurrent={mainSlideCurrent}
            setMainSlideCurrent={setMainSlideCurrent}/>
            <PrevButton onClick={onClickMainPrevHandler}>
              <IoIosArrowBack />
            </PrevButton>
            <NextButton onClick={onClickMainNextHandler}>
              <IoIosArrowForward />
            </NextButton>
        </SlideContainer>
        <SlideNumberWrapper>
          {MainBannertData?.map((item : any, index) => {
            return (
              (mainSlideCurrent === index + 1)
                ? <SlideNumber
                  key={item?.key}
                  style={{backgroundColor: "#FCFCFC"}}/>
                : <SlideNumber
                  key={item?.key}
                  onClick={() => setMainSlideCurrent(index)}/>
            )
          })}
        </SlideNumberWrapper>
      </ThirdMainLayout>
    </ThirdImageBoxWrapper>
  )
};

const ThirdImageBoxWrapper = styled(ImageBoxWrapper)`

  @media screen and (max-width: 500px) {
        
  }
`;

const ThirdMainLayout = styled(MainLayout)`
  flex-direction: column;
  gap: 30px;
  opacity: 0;
`;

const SlideContainer = styled.div`
  width: 76%;
  height: 50%;
  position: relative;

  @media screen and (max-width: 1320px) {
    width: 85%;
    height: 45%;
  }

  @media screen and (max-width: 836px) {
    width: 90%;
    height: 30%;
  }
`;

const SlideBorderLine = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const SlideNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1320px) {
    gap: 24px;
  }

  @media screen and (max-width: 836px) {
    gap: 16px;
  }
`;

const SlideNumber = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #868686;
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: 836px) {
    width: 12px;
    height: 12px;
  }
`;

export const PrevButton = styled.div`
  width: 50px;
  height: 50px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  position: absolute;
  top: 45%;
  left: -5%;
  cursor: pointer;

  &:hover {
    color: #ADADAD;
  }

  @media screen and (max-width: 1320px) {
    font-size: 40px;
  }

  @media screen and (max-width: 836px) {
    font-size: 34px;
    top: 44%;
    left: -6%;
  }
`;

const NextButton = styled(PrevButton)`
  left: auto;
  right: -5%;

  @media screen and (max-width: 836px) {
    right: -6%;
  }
`;

export default ThirdPageImage;