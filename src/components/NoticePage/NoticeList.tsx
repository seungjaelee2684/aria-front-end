import React, { useState } from 'react'
import styled from 'styled-components';
import NoticeCard from './NoticeCard';

const NoticeList = () => {

  return (
    <ListContainer>
        <NoticeCard end={false}/>
        <NoticeCard end={false}/>
        <NoticeCard end={false}/>
        <NoticeCard end={false}/>
        <NoticeCard end={false}/>
        <NoticeCard end={false}/>
        <NoticeCard end={true}/>
        <NoticeCard end={true}/>
        <NoticeCard end={true}/>
        <NoticeCard end={true}/>
        <NoticeCard end={true}/>
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