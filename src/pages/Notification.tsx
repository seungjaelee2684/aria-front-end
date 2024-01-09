import React, { useState } from 'react'
import styled from 'styled-components';
import NotificationList from '../components/NotificationPage/NotificationList';
import Banner from '../components/common/Banner';
import { NoticeTrans } from '../languages/NoticeTrans';
import { NotificationData } from '../data/NotificationData';
import NotificationFilter from '../components/NotificationPage/NotificationFilter';

const Notification = () => {

  const language = localStorage.getItem("language");

  const [noticeFilter, setNoticeFilter] = useState<string>("All");

  const textChange = ( Num : number ) => {
    switch (language) {
        case "chinese" :
            return NoticeTrans[Num]?.chinesetext;
        case "japanese" :
            return NoticeTrans[Num]?.japanesetext;
        case "korean" :
            return NoticeTrans[Num]?.text;
        default :
            return NoticeTrans[Num]?.englishtext;
    };
  };

  return (
    <LayoutContainer>
      <Banner page={1}/>
      <ListLayoutContainer>
        <OutWrapper>
          <TitleOutContainer>
            <TitleContainer>
              {textChange(1)}
              <TotalWrapper>
                Total
                <Total>
                  {NotificationData?.length}
                </Total>
                {textChange(3)}
              </TotalWrapper>
            </TitleContainer>
            <NotificationFilter
              noticeFilter={noticeFilter}
              setNoticeFilter={setNoticeFilter}/>
          </TitleOutContainer>
          <NotificationList noticeFilter={noticeFilter}/>
        </OutWrapper>
      </ListLayoutContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 0px 0px 120px 0px;

  @media screen and (max-width: 500px) {
    padding: 0px 0px 80px 0px;
  }
`;

const ListLayoutContainer = styled.div`
  width: 1320px;
  margin: 60px auto;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const OutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media screen and (max-width: 500px) {
    gap: 8px;
  }
`;

const TitleOutContainer = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
 /* color: #222020; */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;

  @media screen and (max-width: 500px) {
    font-size: 18px;
    gap: 8px;
  }
`;

const TotalWrapper = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
 /* color: #222020; */
  display: flex;
  align-items: end;
  gap: 8px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    gap: 5px;
  }
`;

const Total = styled.div`
  color: #0c1fc9;
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export default Notification;