import React, { useEffect, useState } from 'react'
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper, MainLayout } from './FirstPageImage';
import ThirdBG from '../../assets/images/mainpage/3.webp';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';
import MainSlideShow from './MainSlideShow';
import SlideBG from '../../assets/images/mainpage/Asset 94.webp';
import { MainBannertData } from '../../data/MainBannerData';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface ThirdPageImageProps {
  mainPageTextChange: Function;
};

const ThirdPageImage : React.FC<ThirdPageImageProps> = ({ mainPageTextChange }) => {

  const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(1);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  
  const scrollIndex = useRecoilValue(MainPageNumber);

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      if (scrollIndex === 3) {
        if (mainSlideCurrent === MainBannertData.length) {
          setIsLoop(true);
          setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
        } else {
          setIsLoop(false);
          setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
        };
      };
    }, 5000);

    return () => {
      clearInterval(slideShowInterval);
    };
  }, [mainSlideCurrent, scrollIndex]);

  const onClickMainPrevHandler = () => {
    if (mainSlideCurrent === 0) {
      setIsLoop(false);
      setMainSlideCurrent(MainBannertData?.length - 1);
    } else {
      if (mainSlideCurrent === 1) {
        setIsLoop(true);
      } else {
        setIsLoop(false);
      };
      setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent - 1) % (MainBannertData.length));
    };
  };

  const onClickMainNextHandler = () => {
    if (mainSlideCurrent === MainBannertData.length) {
      setIsLoop(true);
      setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
    } else {
      setIsLoop(false);
      setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
    };
  };

  return (
    <ThirdImageBoxWrapper>
      <BackgroundImage src={ThirdBG} alt=''/>
      <ThirdMainLayout className={(scrollIndex === 3) ? "third-content" : ""}>
        <SlideContainer>
          <SlideBorderLine src={SlideBG} alt=''/>
          <MainSlideShow
            mainSlideCurrent={mainSlideCurrent}
            setMainSlideCurrent={setMainSlideCurrent}
            isLoop={isLoop}
            setIsLoop={setIsLoop}/>
            <PrevButton onClick={onClickMainPrevHandler}>
              <IoIosArrowRoundBack />
            </PrevButton>
            <NextButton onClick={onClickMainNextHandler}>
              <IoIosArrowRoundForward />
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
  width: 86%;
  height: 60%;
  position: relative;

  @media screen and (max-width: 1320px) {
    width: 85%;
    height: 45%;
  }

  @media screen and (max-width: 836px) {
    width: 90%;
    height: 30%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
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
  width: 40px;
  height: 40px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #e9e9e9;
  color: #222020;
  position: absolute;
  top: 48%;
  left: 2%;
  z-index: 99;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #e9e9e9;
    background-color: #222020;
  }

  @media screen and (max-width: 1320px) {
    width: 36px;
    height: 36px;
    font-size: 32px;
  }

  @media screen and (max-width: 836px) {
    width: 28px;
    height: 28px;
    font-size: 24px;
    top: 47%;
  }
`;

const NextButton = styled(PrevButton)`
  left: auto;
  right: 2%;
`;

export default ThirdPageImage;