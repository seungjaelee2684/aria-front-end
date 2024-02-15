import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import NoticeCard from './EventCard';
import { eventPosterData } from '../../data/EventPosterData';

interface EventListProps {
  language: string | null;
  selectOption: {
    pick: string,
    japanesepick: string,
    englishpick: string,
  };
  setSelectOption: React.Dispatch<React.SetStateAction<{
      pick: string,
      japanesepick: string,
      englishpick: string,
  }>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setTotalNumber: React.Dispatch<React.SetStateAction<number>>;
}

const EventList : React.FC<EventListProps> = ({ language, selectOption, setSelectOption, content, setContent, setTotalNumber }) => {

  const ProceedingData = eventPosterData?.filter((item) => item?.status === selectOption?.englishpick);
  const searchDataKR = eventPosterData?.filter((item) => {
    return item?.title.toLowerCase().includes(content.toLowerCase());
  });
  const searchDataJP = eventPosterData?.filter((item) => {
    return item?.japanesetitle.toLowerCase().includes(content.toLowerCase());
  });
  const searchDataEN = eventPosterData?.filter((item) => {
    return item?.englishtitle.toLowerCase().includes(content.toLowerCase());
  });

  const onFilterChange = () => {
    if (content === "") {
      if (selectOption?.englishpick === "All") {
        return (
          eventPosterData?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          })
        )
      } else {
        return (
          ProceedingData?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          })
        )
      };
    } else {
      if (language === "japanese") {
        return (
          searchDataJP?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          })
        )
      } else if (language === "korean") {
        return (
          searchDataKR?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          })
        )
      } else {
        return (
          searchDataEN?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          })
        )
      };
    }; 
  };

  useEffect(() => {
    if (content === "") {
      if (selectOption?.englishpick === "All") {
        setTotalNumber(eventPosterData.length);
      } else {
        setTotalNumber(ProceedingData.length);
      };
    } else {
      if (language === "english") {
        setTotalNumber(searchDataEN.length);
      } else if (language === "japanese") {
        setTotalNumber(searchDataJP.length);
      } else {
        setTotalNumber(searchDataKR.length);
      };
    };
  }, [selectOption, content]);

  return (
    <ListContainer>
      {onFilterChange()}
    </ListContainer>
  )
};

const ListContainer = styled.div`
  width: 1320px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 30px 0px;
  border-top: 2px solid #222020;
  margin: 0px auto;

  @media screen and (max-width: 1320px) {
    width: 96%;
    gap: 16px;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    padding: 16px 0px;
  }
`;

export default EventList;