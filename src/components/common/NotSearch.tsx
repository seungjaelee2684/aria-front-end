import React from 'react'
import styled from 'styled-components';
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { etcTextTrans } from '../../languages/ETCTrans';

const NotSearch = () => {

    const language = localStorage.getItem("language");

    const textTranslate = (Num : number) => {
        switch (language) {
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
        <ContentContainer>
            {textTranslate(3)}
            <ContentLine>
                {textTranslate(4)}
            </ContentLine>
        </ContentContainer>
    </NotSearchContainer>
  )
};

const NotSearchContainer = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 28px;
    font-weight: 600;
    line-height: 140%;
    color: #ADADAD;
    gap: 40px;

    @media screen and (max-width: 836px) {
        flex-direction: column;
        gap: 16px;
        height: 200px;
    }
`;

const SearchIcon = styled.div`
    font-size: 100px;

    @media screen and (max-width: 836px) {
        font-size: 70px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    font-size: 28px;
    font-weight: 600;

    @media screen and (max-width: 836px) {
        align-items: center;
        font-size: 20px;
        gap: 0px;
    }
`;

const ContentLine = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    white-space: pre-line;
    text-align: start;

    @media screen and (max-width: 836px) {
        font-size: 14px;
        text-align: center;
    }
`;

export default NotSearch;