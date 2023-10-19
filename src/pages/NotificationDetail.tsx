import React from 'react'
import { useParams } from 'react-router-dom';

const NotificationDetail = () => {

  const { id } = useParams();

  return (
    <div>{id}</div>
  )
};

export default NotificationDetail;