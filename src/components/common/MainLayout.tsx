import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const MainLayout = () => {

  const darkmode = localStorage.getItem("darkmode");

  return (
    <MainLayoutContainer
      style={{
        color: `${(darkmode === "dark") ? "#FCFCFC" : "#222020"}`,
        backgroundColor: `${(darkmode === "dark") ? "#222020" : "#FFFFFF"}`
      }}>
      <Outlet />
    </MainLayoutContainer>
  )
};

const MainLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  /* padding: 80px 0 100px 0; */
  /* background-color: #FFFFFF; */
 /* color: #222020; */
`;

export default MainLayout;