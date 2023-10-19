import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import NoticeCard from './NoticeCard';
import { eventPosterData } from '../../data/EventPosterData';

interface NoticeListProps {
  japanese: boolean;
  selectOption: {
    pick: string,
    japanesepick: string,
    englishpick: string
  };
  setSelectOption: React.Dispatch<React.SetStateAction<{
      pick: string,
      japanesepick: string,
      englishpick: string
  }>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setTotalNumber: React.Dispatch<React.SetStateAction<number>>;
}

const NoticeList : React.FC<NoticeListProps> = ({ japanese, selectOption, setSelectOption, content, setContent, setTotalNumber }) => {

  const proceedingData = eventPosterData?.filter((item) => item?.status === selectOption?.englishpick);
  const searchDataKR = eventPosterData?.filter((item) => {
    return item?.title.toLowerCase().includes(content.toLowerCase())
  });
  const searchDataJP = eventPosterData?.filter((item) => {
    return item?.japanesetitle.toLowerCase().includes(content.toLowerCase())
  });
  console.log("검색", searchDataKR);

  useEffect(() => {
    if (content === "") {
      if (selectOption?.englishpick === "ALL") {
        setTotalNumber(eventPosterData.length);
      } else {
        setTotalNumber(proceedingData.length);
      };
    } else {
      if (japanese) {
        setTotalNumber(searchDataJP.length);
      } else {
        setTotalNumber(searchDataKR.length);
      };
    };
  }, [selectOption, content]);

  return (
    <ListContainer>
      {(content === "")
        ? ((selectOption?.englishpick === "ALL")
          ? eventPosterData?.map((item) => {
              return (
                <div key={item?.id}>
                  <NoticeCard item={item}/>
                </div>
              )
            })
          : proceedingData?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          }))
        : (japanese)
          ? searchDataJP?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          })
          : searchDataKR?.map((item) => {
            return (
              <div key={item?.id}>
                <NoticeCard item={item}/>
              </div>
            )
          })}
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
`;

export default NoticeList;