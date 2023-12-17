import React from 'react'
import styled from 'styled-components';
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { etcTextTrans } from '../../languages/ETCTrans';

const NotSearch = () => {

    const language = localStorage.getItem("language");

    const textTranslate = (Num : number) => {
        switch (language) {
            case "chinese" :
                return etcTextTrans[Num]?.chinesetext;
            case "japanese" :
                return etcTextTrans[Num]?.japanesetext;
            case "korean" :
                return etcTextTrans[Num]?.text;
            default :
                return etcTextTrans[Num]?.englishtext;
        };
    };
    
  return (
    <NotSearchContainer>
        <SearchIcon>
            <MdOutlineYoutubeSearchedFor />
        </SearchIcon>
        {textTranslate(3)}
        <ContentContainer>
            {textTranslate(4)}
        </ContentContainer>
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
    gap: 16px;
`;

const SearchIcon = styled.div`
    font-size: 100px;
`;

const ContentContainer = styled.div`
    font-size: 18px;
    font-weight: 500;
`;

export default NotSearch;