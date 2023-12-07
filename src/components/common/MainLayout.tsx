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
  height: 100%;
  /* padding: 80px 0 100px 0; */
  background-color: #222020;
`;

export default MainLayout;