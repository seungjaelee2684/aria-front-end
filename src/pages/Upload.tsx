import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { LayOutTitleContainer, TitleBarContainer, TitleColorText } from '../style/PageTitle';
import InformUpload from '../components/UploadPage/InformUpload';
import SingleImageUpload from '../components/UploadPage/SingleImageUpload';
import CurriculumUpload from '../components/UploadPage/CurriculumUpload';
import PortfolioUpload from '../components/UploadPage/PortfolioUpload';
import EtcUpload from '../components/UploadPage/EtcUpload';

const Upload = () => {
  
  const uploadRef = useRef<HTMLDivElement>(null);
  const [mentorImage, setMentorImage] = useState<any>({
    banner_image: null,
    nickname_image: null,
    thumbnail_image: null,
    curriculum_image: [],
    portfolio_image: [],
  });
  const [mentorInfo, setMentorInfo] = useState<any>({
    englishname: "",
    chinesename: "",
    japanesename: "",
    nickname: "",
    nation: "America",
    opendate: ""
  }); 
  const [snsLink, setSnsLink] = useState<any>({
    home: "",
    youtube: "",
    twitter: "",
    instagram: "",
    artstation: "",
    pixiv: ""
  });

  const slidePage : string[] = [
    "강사 정보 입력",
    "배너 및 썸네일 이미지 등록",
    "강사 커리큘럼 등록",
    "강사 포트폴리오 등록",
    "소셜계정 입력"
  ];

  const [uploadSlide, setUploadSlide] = useState<number>(0);
  const slideResult : number = uploadSlide * 100;

  useEffect(() => {
    if (uploadRef.current) {
      uploadRef.current.style.transform = `translateX(-${slideResult}%)`;
    };
  }, [uploadSlide]);

  const prevNextMoveHandler = (prev : boolean) => {
    if (prev) {
      setUploadSlide(uploadSlide - 1);
    } else {
      setUploadSlide(uploadSlide + 1);
    };
  };

  return (
    <AllContainer>
    <LayoutContainer>
      <UploadTitleContainer>
        <TitleBarContainer />
        MEN
        <TitleColorText color="#7769D0">T</TitleColorText>
        OR ADD
      </UploadTitleContainer>
      <ContentContainer>
        <PositionWrapper>
          {slidePage?.map((item : string, index : number) => {
            return (
              (uploadSlide === index)
                ? <PositionButton key={index} background='#222020' color='#FFFFFF'>
                  {item}
                </PositionButton>
                : <PositionButton key={index} background='' color='#222020'>
                  {item}
                </PositionButton>
            )
          })}
        </PositionWrapper>
        <SlideContainer>
          <SlideWrapper ref={uploadRef}>
            <InformUpload mentorInfo={mentorInfo} setMentorInfo={setMentorInfo}/>
            <SingleImageUpload mentorImage={mentorImage} setMentorImage={setMentorImage}/>
            <CurriculumUpload mentorImage={mentorImage} setMentorImage={setMentorImage}/>
            <PortfolioUpload />
            <EtcUpload />
          </SlideWrapper>
        </SlideContainer>
        <PrevNextButtonWrapper>
          {(uploadSlide !== 0)
            ? <PrevNextButton onClick={() => prevNextMoveHandler(true)}>
              이전
            </PrevNextButton>
            : <NotButton />}
          {(uploadSlide !== 4)
            ? <PrevNextButton onClick={() => prevNextMoveHandler(false)}>
              다음
            </PrevNextButton>
            : <NotButton />}
        </PrevNextButtonWrapper>
      </ContentContainer>
    </LayoutContainer>
    </AllContainer>
  )
};

const AllContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
`;

const LayoutContainer = styled.div`
  width: 1320px;
  margin: 0px auto;
  padding: 80px 0px 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #FFFFFF;

  @media screen and (max-width: 1320px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    padding: 60px 0px;
  }
`;

const UploadTitleContainer = styled(LayOutTitleContainer)`
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1320px) {
    width: 90%;
  }

  @media screen and (max-width: 836px) {
    width: 100%;
  }
`;

const PositionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PositionButton = styled.div<{ background : string, color : string }>`
  width: 100%;
  height: 50px;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  user-select: none;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 8px 8px 0px 0px;

  @media screen and (max-width: 1320px) {
    font-size: 12px;
  }
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
  border-top: 2px solid #ADADAD;
  border-bottom: 2px solid #ADADAD;
  box-shadow: #22202050 0px 4px 20px 2px;
`;

const SlideWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const PrevNextButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 0px 0px;

  @media screen and (max-width: 836px) {
    width: 96%;
    padding: 10px 0px 0px 0px;
  }
`;

const PrevNextButton = styled.div`
  width: 120px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222020;
  border-radius: 3px;
  color: #FFFFFF;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;

const NotButton = styled(PrevNextButton)`
  background-color: #FFFFFF;
  cursor: default;
`;

export default Upload;