import React, { useState } from 'react'
import styled from 'styled-components';
import NoticeCard from './NoticeCard';
import { eventPosterData } from '../../data/EventPosterData';

interface NoticeListProps {
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
}

const NoticeList : React.FC<NoticeListProps> = ({ selectOption, setSelectOption }) => {

  const proceedingData = eventPosterData?.filter((item) => item?.status === selectOption?.englishpick);

  return (
    <ListContainer>
      {(selectOption?.englishpick === "ALL")
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
        })}
    </ListContainer>
  )
};

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 30px 0px;
`;

export default NoticeList;