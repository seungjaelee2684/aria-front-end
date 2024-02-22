import React from 'react'
import '../../style/font/font.css';
import './MainImage/MainImage.css';
import styled from 'styled-components';
import { BackgroundImage, ImageBoxWrapper, MainLayout } from './FirstPageImage';
import { EmptyTitle, TitleText } from './SecondPageImage';
import FifthBG from '../../assets/images/mainpage/5.webp';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';
import { useNavigate } from 'react-router-dom';
import { CopyAlert } from '../../store/CopyAlert';

interface FifthPageImageProps {
  mainPageTextChange: Function;
};

const FifthPageImage : React.FC<FifthPageImageProps> = ({ mainPageTextChange }) => {
    
  const navigate = useNavigate();
  const scrollIndex = useRecoilValue(MainPageNumber);
  const [copyHandler, setCopyHandler] = useRecoilState(CopyAlert);

  let titleArr : any = [];
  const secondPageTitle : string = "CONTACT US";
  for (let i = 0; i < secondPageTitle.length; i++) {
    titleArr.push({
      title: secondPageTitle[i],
      key: i
    });
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyHandler(true);
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };
 
  return (
    <ImageBoxWrapper>
      <FifthBackgroundImage src={FifthBG} alt=''/>
      <FifthMainLayout>
        <FifthTitle>
          {titleArr?.map((item : any, index: number) => {
            return (
              (item?.title === " ")
                ? <EmptyTitle key={item?.key}/>
                : <TitleText
                  key={item?.key}
                  className={(scrollIndex === 4) ? "fifth-title" : ""}
                  style={{
                    animationDelay: `${0.5 + index * 0.08}s`
                  }}>
                  {item?.title}
                </TitleText>
            )
          })}
        </FifthTitle>
        <ButtonWrapper>
          <Button
            className={(scrollIndex === 4) ? "fifth-button" : ""}
            color="#e83698"
            onClick={() => handleCopyClipBoard("aria.artacademy@gmail.com")}>
            CLICK TO COPY EMAIL
          </Button>
          <Button
            className={(scrollIndex === 4) ? "fifth-button" : ""}
            color="#7489da"
            onClick={() => navigate("/support/counseling")}>
            GO TO STUDENT COUNSELING PAGE
          </Button>
        </ButtonWrapper>
      </FifthMainLayout>
    </ImageBoxWrapper>
  )
};

const FifthImageBoxWrapper = styled(ImageBoxWrapper)`

  @media screen and (max-width: 500px) {
        
  }
`;

const FifthBackgroundImage = styled(BackgroundImage)`
  margin-top: 80px;
`;

const FifthMainLayout = styled(MainLayout)`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (max-width: 1320px) {
    gap: 70px;
  }

  @media screen and (max-width: 836px) {
    gap: 50px;
  }
`;

const FifthTitle = styled.div`
  font-family: "UniSansThin";
  font-size: 70px;
  line-height: normal;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  user-select: none;

  @media screen and (max-width: 1320px) {
    font-size: 60px;
  }

  @media screen and (max-width: 836px) {
    font-size: 50px;
  }

  @media screen and (max-width: 680px) {
    font-size: 40px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 1320px) {
    gap: 40px;
  }

  @media screen and (max-width: 836px) {
    gap: 30px;
  }
`;

const Button = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  font-family: "ZingRustDemo";
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  color: #FFFFFF;
  padding: 10px 60px;
  opacity: 0;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.color}eb;
  }

  @media screen and (max-width: 1320px) {
    font-size: 28px;
  }

  @media screen and (max-width: 836px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export default FifthPageImage;