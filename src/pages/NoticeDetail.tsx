import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { noticeData } from '../data/NoticeData';
import Banner from '../components/common/Banner';

const NoticeDetail = () => {

  const { id } = useParams();

  const language = localStorage.getItem("language");
  const noticeDto = noticeData?.filter((item) => item.id === id);

  const textTranslate = () => {
    switch (language) {
      case "japanese" :
        return noticeDto[0]?.contents.content.image.japanesecontent;
      case "korean" :
        return noticeDto[0]?.contents.content.image.content;
      default :
        return noticeDto[0]?.contents.content.image.englishcontent;
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
          {noticeDto[0]?.contents.content.image.japanesecontent.map((item : any, index : number) => {
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
          {noticeDto[0]?.contents.content.image.content.map((item : any, index : number) => {
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
          {noticeDto[0]?.contents.content.image.englishcontent.map((item : any, index : number) => {
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
  width: 650px;
  height: auto;
  object-fit: cover;
  user-select: none;

  @media screen and (max-width: 650px) {
    width: 96%;
  }
`;

const NoticeContentWrapper = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin: 60px 0px;

  @media screen and (max-width: 650px) {
    width: 96%;
  }
`;

const NoticeContent = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  white-space: pre-line;
  text-align: center;

  @media screen and (max-width: 1920px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 836px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export default NoticeDetail;