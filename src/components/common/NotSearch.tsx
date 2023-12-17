import React from 'react'
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";

const NotSearch = () => {

    const language = localStorage.getItem("language");
    
  return (
    <NotSearchContainer>
        <SearchIcon>
            <IoSearchOutline />
        </SearchIcon>
        NotSearch
    </NotSearchContainer>
  )
};

const NotSearchContainer = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 28px;
    font-weight: 600;
    line-height: 140%;
    color: #ADADAD;
    gap: 24px;
`;

const SearchIcon = styled.div`
    font-size: 80px;
`;

export default NotSearch;