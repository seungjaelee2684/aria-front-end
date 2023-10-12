import React from 'react'
import styled from 'styled-components';
import NoticeCard from './NoticeCard';

const NoticeList = () => {
  return (
    <ListContainer>
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
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