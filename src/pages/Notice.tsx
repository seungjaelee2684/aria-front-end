import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../store/Translation';
import Search from '../assets/icons/search.png';
import NoticeList from '../components/NoticePage/NoticeList';
import Notification from '../components/NoticePage/Notification/Notification';
import SelectBar from '../components/NoticePage/SelectBar';
import '../style/font/font.css';
import { eventPosterData } from '../data/EventPosterData';
import Banner from '../components/common/Banner';
import { etcTextTrans } from '../languages/ETCTrans';

const Notice = () => {

  const language = localStorage.getItem("language");

  const [inputValue, setInputValue] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [totalNumber, setTotalNumber] = useState<number>(eventPosterData.length);
  const [selectOption, setSelectOption] = useState<{
    pick: string,
    japanesepick: string,
    englishpick: string,
  }>({
    pick: "전체",
    japanesepick: "全体",
    englishpick: "All",
  });

  const onChangeContentHandler = ( e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmitSearchHandler = ( e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContent(inputValue);
    setSelectOption({
      pick: "전체",
      japanesepick: "全体",
      englishpick: "All",
    });
  };

  const textChange = ( Num : number ) => {
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
    <LayoutContainer>
      <Banner page={0}/>
      <LayoutWrapper>
        <NotificationContainer>
          <Notification />
        </NotificationContainer>
        <SearchBarContainer>
          <TotalTextWrapper>
            Total
            <TotalText>
              {totalNumber}
            </TotalText>
            {textChange(0)}
          </TotalTextWrapper>
          <RightWrapper>
            <SearchBarWrapper onSubmit={onSubmitSearchHandler}>
              <SearBarInput
                type="text"
                value={inputValue}
                onChange={onChangeContentHandler}
                autoComplete="off"
                placeholder={textChange(1)}/>
              <IconBox type='submit'>
              <SearchIcon src={Search}/>
              </IconBox>
            </SearchBarWrapper>
            <SelectBar
              language={language}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
              setContent={setContent}
              setInputValue={setInputValue}/>
          </RightWrapper>
        </SearchBarContainer>
        <NoticeList
          language={language}
          selectOption={selectOption}
          setSelectOption={setSelectOption}
          content={content}
          setContent={setContent}
          setTotalNumber={setTotalNumber}/>
      </LayoutWrapper>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  /* padding: 80px 0px; */
`;

const LayoutWrapper = styled.div`
  width: 1320px;
  margin: 40px auto;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const SearchBarContainer = styled.div`
  width: 1320px;
  height: 54px;
  padding: 0px 0px 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;

  @media screen and (max-width: 1320px) {
    width: 100%;
    height: 34px;
  }
`;

const TotalTextWrapper = styled.div`
  font-family: 'LINESeedKR-Bd';
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
 /* color: #222020; */
  gap: 8px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    gap: 4px;
  }
`;

const TotalText = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  color: red;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchBarWrapper = styled.form`
  display: flex;
  align-items: center;
`;

const SearBarInput = styled.input`
  width: 130px;
  height: 34px;
  border-left: 1px solid #ADADAD;
  border-top: 1px solid #ADADAD;
  border-bottom: 1px solid #ADADAD;
  border-right: none;
  background: none;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  padding: 0px 20px;
  background-color: #FFF;
  border-radius: 3px 0px 0px 3px;
  
  &:hover {
    border: 1px solid #222020;
  }

  @media screen and (max-width: 836px) {
    width: 110px;
    height: 30px;
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    width: 110px;
    height: 26px;
    font-size: 10px;
    padding: 0px 10px;
  }
`;

const IconBox = styled.button`
  width: 34px;
  height: 36px;
  border-top: 1px solid #ADADAD;
  border-bottom: 1px solid #ADADAD;
  border-right: 1px solid #ADADAD;
  border-left: none;
  border-radius: 0px 3px 3px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;

  @media screen and (max-width: 836px) {
    width: 30px;
    height: 32px;
  }

  @media screen and (max-width: 500px) {
    width: 26px;
    height: 28px;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 100%;
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;

const NotificationContainer = styled.div`
  width: 100%;
`;

export default Notice;