import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const NotificationDetail = () => {

  const { id } = useParams();

  return (
    <LayoutContainer>
      {id}
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 80px 0px 100px 0px;

  @media screen and (max-width: 500px) {
    padding: 50px 0px 80px 0px;
  }
`;

export default NotificationDetail;