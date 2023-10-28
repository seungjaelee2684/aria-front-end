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
import NoticeBanner from '../components/NoticePage/NoticeBanner';

const Notice = () => {

  const language = useRecoilValue(translate);

  const [inputValue, setInputValue] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [totalNumber, setTotalNumber] = useState<number>(eventPosterData.length);
  const [selectOption, setSelectOption] = useState<{
    pick: string,
    japanesepick: string,
    englishpick: string
  }>({
    pick: "전체",
    japanesepick: "全体",
    englishpick: "All"
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
      englishpick: "All"
    });
  };
  console.log("검색창 입력값", content);

  const textChange = ( Num : number ) => {
    if (Num === 0) {
      switch (language) {
        case "english" :
            return "cases";
        case "japanese" :
            return " 件";
        default :
            return " 건";
      };
    } else {
      switch (language) {
        case "english" :
            return "Type a title";
        case "japanese" :
            return "タイトル検索";
        default :
            return "제목 검색";
      };
    };
  };

  return (
    <LayoutContainer>
      <NoticeBanner />
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
  margin: 50px auto;

  @media screen and (max-width: 1320px) {
    width: 100%;
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
  }
`;

const TotalTextWrapper = styled.div`
  font-family: 'LINESeedKR-Bd';
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  color: #222020;
  gap: 8px;
`;

const TotalText = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  color: red;
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
  width: 120px;
  height: 34px;
  border-left: 1px solid #ADADAD;
  border-top: 1px solid #ADADAD;
  border-bottom: 1px solid #ADADAD;
  border-right: none;
  background: none;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  padding: 0px 20px;
  background-color: #FFF;
  border-radius: 3px 0px 0px 3px;
  
  &:hover {
    border: 1px solid #222020;
  }
`;

const IconBox = styled.button`
  width: 34px;
  height: 35px;
  border-top: 1px solid #ADADAD;
  border-bottom: 1px solid #ADADAD;
  border-right: 1px solid #ADADAD;
  border-left: none;
  border-radius: 0px 3px 3px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 100%;
  cursor: pointer;
`;

const NotificationContainer = styled.div`
  width: 100%;
`;

export default Notice;