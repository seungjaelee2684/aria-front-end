import React, { useState } from 'react'
import styled from 'styled-components';
import NoticeCard from './NoticeCard';
import { eventPosterData } from '../../data/EventPosterData';

const NoticeList = () => {

  return (
    <ListContainer>
      {eventPosterData?.map((item) => {
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