import React from 'react'
import styled from 'styled-components';
import NotificationList from '../components/NotificationPage/NotificationList';
import Banner from '../components/common/Banner';

const Notification = () => {

  return (
    <LayoutContainer>
      <Banner page={1}/>
      <NotificationList />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
`;

export default Notification;