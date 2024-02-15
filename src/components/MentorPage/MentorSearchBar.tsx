import React, { useState } from 'react'
import styled from 'styled-components';
import { LuSearch } from "react-icons/lu";
import { etcTextTrans } from '../../languages/ETCTrans';
import { useRecoilState } from 'recoil';
import { mentorSearchInput } from '../../store/MentorSearchInput';
import FilterButton from './FilterButton';
import PageButton from './PageButton';

const MentorSearchBar = () => {

    const language = localStorage.getItem("language");

    const [mentorSearch, setMentorSearch] = useState<string>("");
    const [searchValue, setSearchValue] = useRecoilState(mentorSearchInput);

    const contentTranslate = (Num : number) => {
        switch (language) {
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

  return (
    <SearchBarOutContainer>
        <SearchBarContainer onSubmit={onSubmitMentorSearchHandler}>
            <FilterButton />
            <SearchBarWrapper>
                <TitleContaier>
                    {contentTranslate(2)}
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
        {/* <PageButton /> */}
    </SearchBarOutContainer>
  )
};

const SearchBarOutContainer = styled.div`
    width: 1320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 0px auto;

    @media screen and (max-width: 1320px) {
        width: 96%;
    }
`;

const SearchBarContainer = styled.form`
    width: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
    user-select: none;
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
        font-size: 18px;
    }
    
    @media screen and (max-width: 500px) {
        width: 30px;
        height: 30px;
        font-size: 16px;
    }
`;

export default MentorSearchBar;