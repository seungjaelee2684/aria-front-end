import React from 'react'
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { noticeData } from '../data/NoticeData';
import Banner from '../components/common/Banner';
import MentorButtonENG from '../assets/images/notice/MENTOR_ENG_11zon.webp';
import MentorButtonJPN from '../assets/images/notice/MENTOR_JAP_11zon.webp';
import MentorButtonKOR from '../assets/images/notice/MENTOR_KOR_11zon.webp';
import CounselingButtonENG from '../assets/images/notice/REGISTER_ENG_11zon.webp';
import CounselingButtonJPN from '../assets/images/notice/REGISTER_JAP_11zon.webp';
import CounselingButtonKOR from '../assets/images/notice/REGISTER_KOR_11zon.webp';

const NoticeDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const language = localStorage.getItem("language");
  const noticeDto = noticeData?.filter((item) => item.id === id);

  const ButtonTranslate = (isMentor: boolean) => {
    if (isMentor) {
      switch (language) {
        case "japanese" :
          return MentorButtonJPN;
        case "korean" :
          return MentorButtonKOR;
        default :
          return MentorButtonENG;
      };
    } else {
      switch (language) {
        case "japanese" :
          return CounselingButtonJPN;
        case "korean" :
          return CounselingButtonKOR;
        default :
          return CounselingButtonENG;
      };
    };
    
  };

  const imageTranslate = () => {
    if (language === "japanese") {
      return (
        <ContentContainer>
          <NoticeImage src={noticeDto[0]?.contents.content.image.japanesecontent[0]} alt=''/>
          <NoticeContentWrapper>
            {noticeDto[0]?.contents.content.text.japanesecontent.map((item : any, index : number) => {
              return (
                <NoticeContent key={index}>
                  {item}
                </NoticeContent>
              )
            })}
          </NoticeContentWrapper>
          {(noticeDto[0])
            && noticeDto[0]?.contents.content.image.japanesecontent.map((item : any, index : number) => {
              return (
                (index !== 0)
                  && <NoticeImage key={index} src={item} alt=''/>
              )
            })}
          <NoticeImage src='' alt=''/>
        </ContentContainer>
      )
    } else if (language === "korean") {
      return (
        <ContentContainer>
          <NoticeImage src={noticeDto[0]?.contents.content.image.content[0]} alt=''/>
          <NoticeContentWrapper>
            {noticeDto[0]?.contents.content.text.content.map((item : any, index : number) => {
              return (
                <NoticeContent key={index}>
                  {item}
                </NoticeContent>
              )
            })}
          </NoticeContentWrapper>
          {(noticeDto[0])
            && noticeDto[0]?.contents.content.image.content.map((item : any, index : number) => {
              return (
                (index !== 0)
                  && <NoticeImage key={index} src={item} alt=''/>
              )
            })}
          <NoticeImage src='' alt=''/>
        </ContentContainer>
      )
    } else {
      return (
        <ContentContainer>
          <NoticeImage src={noticeDto[0]?.contents.content.image.englishcontent[0]} alt=''/>
          <NoticeContentWrapper>
            {noticeDto[0]?.contents.content.text.englishcontent.map((item : any, index : number) => {
              return (
                <NoticeContent key={index}>
                  {item}
                </NoticeContent>
              )
            })}
          </NoticeContentWrapper>
          {(noticeDto[0])
            && noticeDto[0]?.contents.content.image.englishcontent.map((item : any, index : number) => {
              return (
                (index !== 0)
                  && <NoticeImage key={index} src={item} alt=''/>
              )
            })}
          <NoticeImage src='' alt=''/>
        </ContentContainer>
      )
    };
  };

  return (
    <LayoutContainer>
      <Banner page={1}/>
      <NoticeOutContainer>
        {imageTranslate()}
      </NoticeOutContainer>
      <ButtonWrapper>
        <Button
          src={ButtonTranslate(true)}
          alt=''
          onClick={() => navigate("/mentor")}/>
        <Button
          src={ButtonTranslate(false)}
          alt=''
          onClick={() => navigate("/support/counseling")}/>
      </ButtonWrapper>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 0px 0px 100px 0px;
`;

const NoticeOutContainer = styled.div`
  width: 1320px;
  margin: 0px auto;
  padding: 40px 0px;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoticeImage = styled.img`
  width: 600px;
  height: auto;
  object-fit: cover;

  @media screen and (max-width: 650px) {
    width: 80%;
  }
`;

const NoticeContentWrapper = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 50px;
  margin: 60px 0px;

  @media screen and (max-width: 650px) {
    width: 96%;
  }
`;

const NoticeContent = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  white-space: pre-line;

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 836px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

const ButtonWrapper = styled.div`
  width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  user-select: none;
  gap: 60px;

  @media screen and (max-width: 650px) {
    width: 96%;
    gap: 30px;
  }
`;

const Button = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    width: 120px;
  }
`;

export default NoticeDetail;