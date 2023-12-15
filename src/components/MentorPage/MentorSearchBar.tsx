import React, { useState } from 'react'
import styled from 'styled-components';
import { LuSearch } from "react-icons/lu";
import { etcTextTrans } from '../../languages/ETCTrans';

const MentorSearchBar = () => {

    const language = localStorage.getItem("language");

    const [mentorSearch, setMentorSearch] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");

    const contentTranslate = (Num : number) => {
        switch (language) {
            case "chinese" :
                return etcTextTrans[Num]?.chinesetext
            case "japanese" :
                return etcTextTrans[Num]?.japanesetext
            case "korean" :
                return etcTextTrans[Num]?.text
            default :
                return etcTextTrans[Num]?.englishtext
        };
    };

    const onChangeMentorSearchHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setMentorSearch(searchValue);
    };

    const onSubmitMentorSearchHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchValue(mentorSearch);
    };

  return (
    <SearchBarContainer onSubmit={onSubmitMentorSearchHandler}>
        <SearchBarWrapper>
            <TitleContaier>
                이름
            </TitleContaier>      
            <SearchBetweenLine />
            <SearchBar
                type='text'
                autoComplete="off"
                value={mentorSearch}
                placeholder={contentTranslate(1)}
                onChange={onChangeMentorSearchHandler}/>
        </SearchBarWrapper>
        <IconBox type='submit'>
            <LuSearch />
        </IconBox>
    </SearchBarContainer>
  )
};

const SearchBarContainer = styled.form`
    width: 1320px;
    margin: 0px auto;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;

    @media screen and (max-width: 1320px) {
        width: 96%;
    }
`;

const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ADADAD;
    color: #ADADAD;
`;

const TitleContaier = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    width: 70px;
`;

const SearchBetweenLine = styled.div`
    width: 1px;
    height: 34px;
    background-color: #e9e9e9;
`;

const SearchBar = styled.input`
    width: 150px;
    height: 40px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    border: none;
    padding: 0px 16px;
    color: #222020;
`;

const IconBox = styled.button`
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: none;
    background-color: #5C9DFF;
    color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default MentorSearchBar;