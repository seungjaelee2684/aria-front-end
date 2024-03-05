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

const MainLayoutContainer = styled.main`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background-color: #FFFFFF;
  color: #222020;
  padding-top: 30px;
  
  @media screen and (max-width: 500px) {
    padding-top: 0px;
  }
`;

export default MainLayout;