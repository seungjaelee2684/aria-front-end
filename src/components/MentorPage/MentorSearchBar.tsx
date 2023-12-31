import React, { useState } from 'react'
import styled from 'styled-components';
import { LuSearch } from "react-icons/lu";
import { etcTextTrans } from '../../languages/ETCTrans';
import { useRecoilState } from 'recoil';
import { mentorSearchInput } from '../../store/MentorSearchInput';
import FilterButton from './FilterButton';

const MentorSearchBar = () => {

    const language = localStorage.getItem("language");
    const darkmode = localStorage.getItem("darkmode");

    const [mentorSearch, setMentorSearch] = useState<string>("");
    const [searchValue, setSearchValue] = useRecoilState(mentorSearchInput);

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
        setMentorSearch("");
    };
    console.log("강사 검색 -> ", searchValue, mentorSearch);

  return (
    <SearchBarContainer onSubmit={onSubmitMentorSearchHandler}>
        <FilterButton />
        <SearchBarWrapper>
            <TitleContaier>
                {contentTranslate(2)}
            </TitleContaier>      
            <SearchBetweenLine style={{backgroundColor: `${(darkmode === "dark") ? "#FCFCFC" : "#e9e9e9"}`}}/>
            <SearchBar
                style={{color: `${(darkmode === "dark") ? "#FCFCFC" : "#222020"}`}}
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
    user-select: none;

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

    @media screen and (max-width: 836px) {
        width: 56px;
        font-size: 13px;
    }

    @media screen and (max-width: 500px) {
        width: 40px;
        font-size: 10px;
    }
`;

const SearchBetweenLine = styled.div`
    width: 1px;
    height: 34px;
    /* background-color: #e9e9e9; */

    @media screen and (max-width: 836px) {
        height: 28px;
    }

    @media screen and (max-width: 500px) {
        height: 24px;
    }
`;

const SearchBar = styled.input`
    width: 150px;
    height: 40px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    border: none;
    outline: none;
    padding: 0px 16px;
    background-color: transparent;
   /* color: #222020; */

    &:hover {
        box-shadow: rgba(57, 55, 55, 0.338) 1px 1px 3px 1px;
    }

    &:focus {
        outline: #5C9DFF solid 1px;
    }

    @media screen and (max-width: 836px) {
        width: 130px;
        height: 36px;
        font-size: 13px;
    }

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 30px;
        font-size: 10px;
    }
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

    @media screen and (max-width: 836px) {
        width: 36px;
        height: 36px;
        font-size: 18px;
    }
    
    @media screen and (max-width: 500px) {
        width: 30px;
        height: 30px;
        font-size: 16px;
    }
`;

export default MentorSearchBar;