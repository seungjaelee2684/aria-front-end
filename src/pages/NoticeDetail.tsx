import React from 'react'
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { eventPosterData } from '../data/EventPosterData';
import styled from 'styled-components';

const NoticeDetail = () => {

  const { id } = useParams();
  console.log("id ->", id);
  const language = localStorage.getItem("language");
  const eventList = eventPosterData?.filter((item) => item.id === id);
  console.log("이벤트데이터", eventList);

  return (
    <div>{id}</div>
  )
};

export default NoticeDetail;