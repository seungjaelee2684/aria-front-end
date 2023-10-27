import React from 'react'
import styled from 'styled-components';
import NotificationList from '../components/NotificationPage/NotificationList';
import NotificationBanner from '../components/NotificationPage/NotificationBanner';

const Notification = () => {

  

  return (
    <LayoutContainer>
      <NotificationBanner />
      <NotificationList />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 80px 0px;
`;

export default Notification;