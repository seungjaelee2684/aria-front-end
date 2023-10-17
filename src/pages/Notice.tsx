import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../store/Translation';
import Search from '../assets/icons/search.png';
import NoticeList from '../components/NoticePage/NoticeList';
import Notification from '../components/NoticePage/Notification/Notification';
import SelectBar from '../components/NoticePage/SelectBar';

const Notice = () => {

  const japanese = useRecoilValue(translate);

  const [searchContent, setSearchContent] = useState<{ content : string }>({
    content: "",
  });
  const [selectOption, setSelectOption] = useState<{
    pick: string,
    japanesepick: string,
    englishpick: string
  }>({
    pick: "전체",
    japanesepick: "全体",
    englishpick: "ALL"
  });
  const { content } = searchContent;

  const onChangeContentHandler = ( e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchContent({
      ...searchContent,
      [name]: value
    });
  };
  console.log("검색창 입력값", searchContent.content);

  return (
    <LayoutContainer>
      <TitleContainer>
        배너
      </TitleContainer>
      <LayoutWrapper>
        <NotificationContainer>
          <Notification />
        </NotificationContainer>
        <SearchBarContainer>
          <SearchBarWrapper>
            <SearBarInput
              name="content"
              value={content}
              onChange={(e) => onChangeContentHandler(e)}
              autoComplete="off"
              placeholder={
                (japanese)
                ? "何をお探しですか？"
                : '무엇을 찾으시나요?'
              }/>
            <SearchIcon src={Search}/>
          </SearchBarWrapper>
          <SelectBar
            japanese={japanese}
            selectOption={selectOption}
            setSelectOption={setSelectOption}/>
        </SearchBarContainer>
        <NoticeList
          selectOption={selectOption}
          setSelectOption={setSelectOption}/>
      </LayoutWrapper>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100%;
  /* padding: 80px 0px; */
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e9e9e9;
  margin: 80px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LayoutWrapper = styled.div`
  /* width: 100%; */
  margin: 50px 15%;
`;

const SearchBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const SearchBarWrapper = styled.form`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: center;
`;

const SearBarInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background: none;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  padding: 10px 20px;
  background-color: #e9e9e9;
  border-radius: 50px;
  
  &:active {
    border: 1px solid;
  }
`;

const SearchIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const NotificationContainer = styled.div`
  width: 100%;
`;

export default Notice;