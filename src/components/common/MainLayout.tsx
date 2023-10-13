import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <Outlet />
    </MainLayoutContainer>
  )
};

const MainLayoutContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  padding: 200px 0 100px 0;

  /* @media screen and (max-width: 1600px) {
    padding: 80px 200px 100px 200px;
  } */

  @media screen and (max-width: 834px) {
    padding: 80px 0 100px 0;
  }
  @media screen and (max-width: 375px) {
    padding: 80px 0 100px 0;
  }  
`;

export default MainLayout;