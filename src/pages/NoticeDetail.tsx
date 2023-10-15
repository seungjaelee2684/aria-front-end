import React from 'react'
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { eventPosterData } from '../data/EventPosterData';

const NoticeDetail = () => {

  const { id } = useParams();
  console.log("id ->", id);
  const japanese = useRecoilValue(translate);
  const eventList = eventPosterData?.filter((item) => item.id === id);
  console.log("이벤트데이터", eventList);

  return (
    <div>NoticeDetail</div>
  )
};

export default NoticeDetail;