import React from 'react'
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { eventPosterData } from '../data/EventPosterData';
import styled from 'styled-components';

const EventDetail = () => {

  const { id } = useParams();
  const language = localStorage.getItem("language");
  const eventList = eventPosterData?.filter((item) => item.id === id);

  return (
    <div>{id}</div>
  )
};

export default EventDetail;