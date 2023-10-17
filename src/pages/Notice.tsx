import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../store/Translation';
import Search from '../assets/icons/search.png';
import NoticeList from '../components/NoticePage/NoticeList';
import Notification from '../components/NoticePage/Notification/Notification';
import SelectBar from '../components/NoticePage/SelectBar';
import '../style/font/font.css';

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
          <TotalTextWrapper>
            Total
            <TotalText>
              12
            </TotalText>
            {japanese ? " 件" : " 건"}
          </TotalTextWrapper>
          <RightWrapper>
            <SearchBarWrapper>
              <SearBarInput
                name="content"
                value={content}
                onChange={(e) => onChangeContentHandler(e)}
                autoComplete="off"
                placeholder={
                  (japanese)
                  ? "検索語"
                  : '검색어'
                }/>
              <IconBox>
              <SearchIcon src={Search}/>
              </IconBox>
            </SearchBarWrapper>
            <SelectBar
              japanese={japanese}
              selectOption={selectOption}
              setSelectOption={setSelectOption}/>
          </RightWrapper>
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
  height: 54px;
  padding: 0px 0px 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const IconBox = styled.div`
  width: 34px;
  height: 34px;
  border-top: 1px solid #ADADAD;
  border-bottom: 1px solid #ADADAD;
  border-right: 1px solid #ADADAD;
  border-radius: 0px 3px 3px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
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