import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { noticeData } from '../data/NoticeData';
import Banner from '../components/common/Banner';

const NoticeDetail = () => {

  const { id } = useParams();

  const noticeDto = noticeData?.filter((item) => item.id === id);

  return (
    <LayoutContainer>
      <Banner page={1}/>
      {noticeDto[0]?.contents.title}
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 0px 0px 100px 0px;
`;

export default NoticeDetail;